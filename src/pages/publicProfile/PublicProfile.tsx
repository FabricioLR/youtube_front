import { useContext, useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { AuthContex } from "../../context/auth"
import useQuery from "../../context/query"
import { UserState, UserTypes } from "../../storage/ducks/user/types"
import { VideosState } from "../../storage/ducks/videos/types"
import style from "./publicProfile.module.css"
import ProfileImage from "../../images/profile.png"
import ProfileVideos from "../../components/video/ProfileVideos/ProfileVideos"
import Header from "../../components/header/Header"
import Profile from "../../components/profile/profile"

type StateData = {
    user: UserState
}

function PublicProfile(){
    const dispatch = useDispatch()
    const State = useSelector(state => state) as StateData
    const query = useQuery()

    useEffect(() => {
        dispatch({ type: UserTypes.GET_USER_REQUEST, payload: { userId: query.get("u") }})
    }, [])

    return(
        <div>
            <Header/>
            <Profile/>
            <div id={style.profile}>
                <div id={style.profileInfo}>
                    <div id={style.image}>
                        <img src={State.user.data?.profileImage == "" ? ProfileImage : State.user.data?.profileImage} alt="" />
                    </div>
                    <div id={style.name}>
                        <p>{State.user.data?.name}</p>
                    </div>
                </div>
            </div>
            <div id={style.userVideos}>
                <p>Uploaded Videos</p>
                <div id={style.videos}>
                    {State.user.data?.userVideos.map(video => <ProfileVideos video={video}/>)}
                </div>
            </div>
        </div>
    )
}

export default PublicProfile
