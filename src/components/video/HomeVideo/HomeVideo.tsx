import style from "./homeVideo.module.css"
import ProfileImage from "../../../images/profile.png"

type HomeVideoProps = {
    data: {
        title: string
        url: string
        visualizations: number
        user: {
            name: string
            foto_url: string
        }
    }
}

function HomeVideo(props: HomeVideoProps){
    return(
        <div className={style.localVideo}>
            <div>
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