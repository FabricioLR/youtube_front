import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/header/Header"
import ProfileVideos from "../../components/video/ProfileVideos/ProfileVideos"
import { AuthContex } from "../../context/auth"
import style from "./profile.module.css"
import ProfileMenu from "../../components/profile/profile"
import Loading from "../../components/loading/Loading"
import ProfileImage from "../../components/profileImage/ProfileImage"

function Profile(){
    const { user, ChangeProfileImage } = useContext(AuthContex)
    const [file, setFile] = useState(null)
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()

    async function ChangeImage(){
        setLoad(true)
        await ChangeProfileImage({ file })
        setLoad(false)
    }

    return (
        <>
        <Header/>
        <ProfileMenu/>
            {
                user ? 
                    <div>
                        <div id={style.profile}>
                            <div id={style.profileInfo}>
                                <ProfileImage divStyle={{width: 160, height: 160}} src={user.profileImage ? user.profileImage : ""}/>
                                <div id={style.name}>
                                    <p>{user.name}</p>
                                </div>
                            </div>
                            <div id={style.edit}>
                                <form onSubmit={(e) => {e.preventDefault(); ChangeImage()}}>
                                    <Loading active={load}/>
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