import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContex } from "../../../context/auth"
import { Video, VideoTypes } from "../../../storage/ducks/video/types"
import style from "./watchVideo.module.css"
import ProfileImage from "../../../images/profile.png"
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa"
import { useDispatch } from "react-redux"

type WatchVideoProps = {
    video: Video
}


function WatchVideo(props: WatchVideoProps){
    const { user } = useContext(AuthContex)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [like, setLike] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const [deslike, setDeslike] = useState(0)
    const [isDesliked, setIsDesliked] = useState(false)
    const [time, setTime] = useState<string[]>([])
    const times = ["years", "months", "days", "hours", "minutes"]

    useEffect(() => {
        setLike(props.video.like)
        setDeslike(props.video.deslike)
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

    function Like(){
        if (!isLiked && !isDesliked) {
            setLike(like + 1)
            setIsLiked(true)
            dispatch({ type: VideoTypes.UPDATE_REQUEST, payload: { videoId: props.video.id, type: "like" }})
        }
        if (!isLiked && isDesliked) {
            setLike(like + 1)
            setDeslike(deslike - 1)
            setIsDesliked(false)
            setIsLiked(true)
            dispatch({ type: VideoTypes.UPDATE_REQUEST, payload: { videoId: props.video.id, type: "like" }})
            dispatch({ type: VideoTypes.UPDATE_REQUEST, payload: { videoId: props.video.id, type: "removeDeslike" }})
        }
        if (isLiked){
            setLike(like - 1)
            setIsLiked(false)
            dispatch({ type: VideoTypes.UPDATE_REQUEST, payload: { videoId: props.video.id, type: "removeLike" }})
        }
    }

    function Deslike(){
        if (!isDesliked && !isLiked) {
            setDeslike(deslike + 1)
            setIsDesliked(true)
            dispatch({ type: VideoTypes.UPDATE_REQUEST, payload: { videoId: props.video.id, type: "deslike" }})
        }
        if (!isDesliked && isLiked ) {
            setDeslike(deslike + 1)
            setLike(like - 1)
            setIsDesliked(true)
            setIsLiked(false)
            dispatch({ type: VideoTypes.UPDATE_REQUEST, payload: { videoId: props.video.id, type: "deslike" }})
            dispatch({ type: VideoTypes.UPDATE_REQUEST, payload: { videoId: props.video.id, type: "removeLike" }})
        }
        if (isDesliked){
            setDeslike(deslike - 1)
            setIsDesliked(false)
            dispatch({ type: VideoTypes.UPDATE_REQUEST, payload: { videoId: props.video.id, type: "removeDeslike" }})
        }
    }

    return(
        <div id={style.localVideo}>
            <div id={style.video}>
                <video src={props.video.url} controls></video>
            </div>
            <div id={style.title}>
                <p>{props.video.title}</p>
            </div>
            <div id={style.videoInfo}>
                <p>{props.video.visualizations} visualizations - {time[0]}</p>
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
                        <img src={props.video.user.profileImage == "" ? ProfileImage : props.video.user.profileImage} alt="" />
                    </div>
                    <div id={style.ownerName}>
                        <p>{props.video.user.name}</p>
                    </div>
                </div>
                <div>
                    <div id={style.likes} onClick={Like}>
                        { isLiked ? 
                                <FaThumbsUp color="#0066ff"/>
                            :
                                <FaThumbsUp/>
                        }
                        <p>{like}</p>
                    </div>
                    <div id={style.deslikes} onClick={Deslike}>
                        { isDesliked ? 
                                <FaThumbsDown color="#0066ff"/>
                            :
                                <FaThumbsDown/>
                        }
                        <p>{deslike}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchVideo
