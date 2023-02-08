import { CSSProperties } from "react"
import style from "./profileImage.module.css"
import profileImage from "../../images/profile.png"

type ProfileImageProps = {
    src: string
    divStyle?: CSSProperties
    imageStyle?: CSSProperties
    onClick?: Function
    alt?: string
}

function ProfileImage(props: ProfileImageProps){
    return (
        <div id={style.profile} style={props.divStyle ? props.divStyle : {}} onClick={() => props.onClick ? props.onClick(): null}>
            <img src={props.src ? props.src : profileImage} alt={props.alt ? props.alt : ""} style={props.imageStyle ? props.imageStyle : {}}/>
        </div>
    )
}

export default ProfileImage