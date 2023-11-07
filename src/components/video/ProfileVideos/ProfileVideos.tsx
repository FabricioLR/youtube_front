import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { CommentsTypes } from "../../../storage/ducks/comments/types"
import { HistoricTypes } from "../../../storage/ducks/historic/types"
import { Video, VideosTypes } from "../../../storage/ducks/videos/types"
import style from "./profileVideos.module.css"

type ProfileVideosData = {
    video: Omit<Video, "user">
}

function ProfileVideos(data: ProfileVideosData){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [time, setTime] = useState<string[]>([])
    const times = ["years", "months", "days", "hours", "minutes"]

    useEffect(() => {
        const postedTime = new Date(data.video.createdAt)
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
            <div id={style.video} onClick={() => {
                dispatch({ type: VideosTypes.UPDATE_VISUALIZATIONS_REQUEST, payload: data.video.id})
                dispatch({ type: HistoricTypes.ADD_TO_HISTORIC_REQUEST, payload: { videoId: data.video.id }})
                //dispatch({ type: CommentsTypes.LOAD_REQUEST, payload: { videoId: data.video.id } })
                navigate("/watch?v=" + data.video.id)
            }}>
                <video src={data.video.url}></video>
            </div>
            <div id={style.title}>
                <p>{data.video.title}</p>
            </div>
            <div id={style.videoInfo}>
                <div>
                    <p>{data.video.visualizations} visualizations</p>
                </div>
                <div>
                    <p>{time[0]}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileVideos