import style from "./homeVideo.module.css"
import ProfileImage from "../../../images/profile.png"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { VideosTypes } from "../../../storage/ducks/videos/types"

type HomeVideoProps = {
    data: {
        title: string
        url: string
        id: string
        visualizations: number
        user: {
            name: string
            foto_url: string
        }
    }
}

function HomeVideo(props: HomeVideoProps){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className={style.localVideo} id={props.data.id}>
            <div onClick={() => {dispatch({ type: VideosTypes.UPDATE_REQUEST, payload: props.data.id});navigate("/watch?v=" + props.data.id)}}>
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
                    <p>date</p>
                </div>
            </div>
            <div className={style.ownerInfo}>
                <div className={style.ownerProfileImage}>
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