import style from "./comment.module.css"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContex, User } from "../../context/auth"
import ProfileImage from "../profileImage/ProfileImage"

type CommentProps = {
    comment: {
        comment: string
        user: Omit<User, "userVideos">
    }
    
}

function Comment(props: CommentProps){
    const navigate = useNavigate()
    const { user } = useContext(AuthContex)

    return(
        <div className={style.localComment}>
            <ProfileImage divStyle={{cursor: "pointer"}} src={props.comment.user.profileImage ? props.comment.user.profileImage : ""} onClick={props.comment.user.id == user?.id ? () => navigate("/profile") : () => navigate("/publicProfile?u=" + props.comment.user.id)}/>
            {/* <div className={style.owner} onClick={() => {
                if (props.comment.user.id == user?.id){
                    navigate("/profile")
                } else {
                    navigate("/publicProfile?u=" + props.comment.user.id)
                }
            }}>
                <img src={props.comment.user.foto_url == "" ? ProfileImage : props.comment.user.foto_url} alt="" />
            </div> */}
            <div>
                <div className={style.ownerName}>
                    <p>{props.comment.user.name}</p>
                </div>
                <div className={style.comment}>
                    <p>{props.comment.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment