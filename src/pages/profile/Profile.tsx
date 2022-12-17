import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import ProfileVideos from "../../components/video/ProfileVideos/ProfileVideos"
import { AuthContex } from "../../context/auth"
import ProfileImage from "../../images/profile.png"
import style from "./profile.module.css"

function Profile(){
    const { user, ChangeProfileImage } = useContext(AuthContex)
    const [file, setFile] = useState(null)
    const navigate = useNavigate()

    async function ChangeImage(){
        await ChangeProfileImage({ file })
    }

    return (
        <>
            {
                user ? 
                    <div>
                        <div id={style.profile}>
                            <div id={style.profileInfo}>
                                <div id={style.image}>
                                    <img src={user.foto_url == "" ? ProfileImage : user.foto_url} alt="" />
                                </div>
                                <div id={style.name}>
                                    <p>{user.name}</p>
                                </div>
                            </div>
                            <div id={style.edit}>
                                <form onSubmit={(e) => {e.preventDefault(); ChangeImage()}}>
                                    <div id={style.changeImage}>
                                        <label>Select profile image</label>
                                        <input type="file" onChange={(e: any) => setFile(e.target.files[0])} required/>
                                    </div>
                                    <input type="submit" value="Save" id={style.submit}/>
                                </form>
                                <form onSubmit={(e) => {e.preventDefault(); navigate("/upload")}}>
                                    <div id={style.uploadVideo}>
                                        <label htmlFor="">Upload Video</label>
                                        <label htmlFor="">Chose file and title for the video</label>
                                    </div>
                                    <input type="submit" value="Upload" id={style.submit}/>
                                </form>
                            </div>
                        </div>
                        <div id={style.userVideos}>
                            <p>Uploaded Videos</p>
                            <div id={style.videos}>
                                {user.userVideos.map(video => <ProfileVideos video={video}/>)}
                            </div>
                        </div>
                    </div>
                    :
                    <div>Please, sign in</div>
            }
        </>
    )
}

export default Profile