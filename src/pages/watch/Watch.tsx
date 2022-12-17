import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import useQuery from "../../context/query"
import { Video, VideosState } from "../../storage/ducks/videos/types"
import style from "./watch.module.css"
import ProfileImage from "../../images/profile.png"
import Header from "../../components/header/Header"
import Profile from "../../components/profile/profile"
import { AuthContex } from "../../context/auth"
import { useNavigate } from "react-router-dom"

type StateData = {
    videos: VideosState
}

function Watch(){
    const [video, setVideo] = useState<Video | null>(null)
    const query = useQuery()
    const State = useSelector(state => state) as StateData
    const { user } = useContext(AuthContex)
    const navigate = useNavigate()

    function getVideo(){
        const result = State.videos.data.filter(video => video.id == query.get("v"))
        setVideo(result[0])
    }

    useEffect(() => {
        if (State.videos.data.length != 0){
            getVideo()
        }
    })

    return(
        <>
            <Header/>
            <Profile/>
            <div id={style.localVideo}>
                <div id={style.video}>
                    <video src={video?.url} controls></video>
                </div>
                <div id={style.title}>
                    <p>{video?.title}</p>
                </div>
                <div id={style.videoInfo}>
                    <p>{video?.visualizations} visualizações - {"date"}</p>
                </div>
                <div id={style.owner}>
                    <div>
                        <div id={style.ownerImage} onClick={() => {
                            if (video?.user.id == user?.id){
                                navigate("/profile")
                            } else {
                                navigate("/publicProfile?u=" + video?.user.id)
                            }
                        }}>
                            <img src={video?.user.foto_url == "" ? ProfileImage : video?.user.foto_url} alt="" />
                        </div>
                        <div id={style.ownerName}>
                            <p>{video?.user.name}</p>
                        </div>
                    </div>
                    <div>
                        <div id={style.likes}>
                            <p>{video?.like} likes</p>
                        </div>
                        <div id={style.deslikes}>
                            <p>{video?.deslike} deslikes</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Watch