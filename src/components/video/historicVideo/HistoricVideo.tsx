import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { CommentsTypes } from "../../../storage/ducks/comments/types"
import { Video, VideosTypes } from "../../../storage/ducks/videos/types"
import style from "./historicVideo.module.css"

type HistoricVideoProps = {
    video: Omit<Video, "user">
}

function HistoricVideo(props: HistoricVideoProps){
    const dispatch = useDispatch()
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
        <div className={style.localVideo}>
            <div className={style.video} onClick={() => {
                dispatch({ type: VideosTypes.UPDATE_VISUALIZATIONS_REQUEST, payload: props.video.id})
                //dispatch({ type: CommentsTypes.LOAD_REQUEST, payload: { videoId: props.video.id } })
                navigate("/watch?v=" + props.video.id)
            }}>
                <video src={props.video.url}></video>
            </div>
            <div className={style.title}>
                <p>{props.video.title}</p>
            </div>
            <div className={style.videoInfo}>
                <div>
                    <p>{props.video.visualizations} visualizations</p>
                </div>
                <div>
                    <p>{time[0]}</p>
                </div>
            </div>
        </div>
    )
}

export default HistoricVideo