import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContex } from "../../../context/auth"
import { Video } from "../../../storage/ducks/video/types"
import style from "./watchVideo.module.css"
import ProfileImage from "../../../images/profile.png"

type WatchVideoProps = {
    video: Video
}


function WatchVideo(props: WatchVideoProps){
    const { user } = useContext(AuthContex)
    const navigate = useNavigate()
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
        <div id={style.localVideo}>
            <div id={style.video}>
                <video src={props.video.url} controls></video>
            </div>
            <div id={style.title}>
                <p>{props.video.title}</p>
            </div>
            <div id={style.videoInfo}>
                <p>{props.video.visualizations} visualizações - {time[0]}</p>
            </div>
            <div id={style.owner}>
                <div>
                    <div id={style.ownerImage} onClick={() => {
                        if (props.video.user.id == user?.id){
                            navigate("/profile")
                        } else {
                            navigate("/publicProfile?u=" + props.video.user.id)
                        }
                    }}>
                        <img src={props.video.user.foto_url == "" ? ProfileImage : props.video.user.foto_url} alt="" />
                    </div>
                    <div id={style.ownerName}>
                        <p>{props.video.user.name}</p>
                    </div>
                </div>
                <div>
                    <div id={style.likes}>
                        <p>{props.video.like} likes</p>
                    </div>
                    <div id={style.deslikes}>
                        <p>{props.video.deslike} deslikes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchVideo