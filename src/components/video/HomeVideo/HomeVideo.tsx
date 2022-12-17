import style from "./homeVideo.module.css"
import ProfileImage from "../../../images/profile.png"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Video, VideosTypes } from "../../../storage/ducks/videos/types"
import { useContext, useEffect, useState } from "react"
import { AuthContex } from "../../../context/auth"
import { HistoricTypes } from "../../../storage/ducks/historic/types"

type HomeVideoProps = {
    data: Video
}

function HomeVideo(props: HomeVideoProps){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useContext(AuthContex)
    const [time, setTime] = useState<string[]>([])
    const times = ["years", "months", "days", "hours", "minutes"]

    useEffect(() => {
        const postedTime = new Date(props.data.createdAt)
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

    return (
        <div className={style.localVideo} id={props.data.id}>
            <div onClick={() => {dispatch({ type: VideosTypes.UPDATE_REQUEST, payload: props.data.id});dispatch({ type: HistoricTypes.ADD_REQUEST, payload: { videoId: props.data.id }});navigate("/watch?v=" + props.data.id)}}>
                <video src={props.data.url}></video>
            </div>
            <div className={style.title}>
                <p>{props.data.title}</p>
            </div>
            <div className={style.videoInfo}>
                <div>
                    <p>{props.data.visualizations} visualizações</p>
                </div>
                <div>
                    <p>{time[0]}</p>
                </div>
            </div>
            <div className={style.ownerInfo}>
                <div className={style.ownerProfileImage} onClick={() => { 
                    if (props.data.user.id == user?.id){
                        navigate("/profile")
                    } else {
                        navigate("/publicProfile?u=" + props.data.user.id)
                    }
                    }}>
                    <img src={props.data.user.foto_url == "" ? ProfileImage : props.data.user.foto_url} alt="" />
                </div>
                <div>
                    <p>{props.data.user.name}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeVideo