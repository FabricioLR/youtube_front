import { SearchVideos } from "../../../storage/ducks/search/types"
import style from "./SearchedVideo.module.css"
import ProfileImage from "../../../images/profile.png"
import { useDispatch } from "react-redux"
import { VideosTypes } from "../../../storage/ducks/videos/types"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AuthContex } from "../../../context/auth"
import { HistoricTypes } from "../../../storage/ducks/historic/types"

type SearchedVideoProps = {
    video: SearchVideos
}

function SearchedVideo(props: SearchedVideoProps){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useContext(AuthContex)
    const [time, setTime] = useState<string[]>([])
    const times = ["years", "months", "days", "hours", "minutes"]

    useEffect(() => {
        const postedTime = new Date(props.video.createdAt)
        const currentTime = new Date()

        const passedTime = new Date(currentTime.getTime() - postedTime.getTime())

        const date = []

        date.push(passedTime.getUTCFullYear() - 1970)
        date.push(passedTime.getUTCMonth())
        date.push(passedTime.getUTCDate() - 1)
        date.push(passedTime.getUTCHours())
        date.push(passedTime.getMinutes())
        
        date.map((time, index) => {
            if (time != 0){
                setTime(array => [...array, time.toString() + " " + times[index]])
            } else {
                if (index == date.length){
                    setTime(array => [...array, "now"])
                }
            }
        })
    }, [])

    return(
        <div id={props.video.id} className={style.localVideo}>
            <div className={style.video} onClick={() => {dispatch({ type: VideosTypes.UPDATE_REQUEST, payload: props.video.id});dispatch({ type: HistoricTypes.ADD_REQUEST, payload: { videoId: props.video.id }});navigate("/watch?v=" + props.video.id)}}>
                <video src={props.video.url} />
            </div>
            <div className={style.info}>
                <div className={style.title}>
                    <p>{props.video.title}</p>
                </div>
                <div className={style.videoInfo}>
                    <div>
                        <p>{props.video.visualizations} visualizações</p>
                    </div>
                    <div>
                        <p>{time[0]}</p>
                    </div>
                </div>
                <div className={style.ownerInfo}>
                    <div onClick={() => {
                        if (props.video.user.id == user?.id){
                            navigate("/profile")
                        } else {
                            navigate("/publicProfile?u=" + props.video.user.id)
                        }
                    }}>
                        <img src={props.video.user.foto_url == "" ? ProfileImage : props.video.user.foto_url} alt="" />
                    </div>
                    <div>
                        <p>{props.video.user.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchedVideo