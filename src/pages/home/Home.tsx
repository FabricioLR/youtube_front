import { useSelector, useDispatch } from "react-redux"

import Header from "../../components/header/Header"
import Profile from "../../components/profile/profile"
import { VideosState } from "../../storage/ducks/videos/types"
import HomeVideo from "../../components/video/HomeVideo/HomeVideo"
import style from "./home.module.css"

type StateData = {
    videos: VideosState
}

function Home(){
    const State = useSelector(state => state) as StateData
    const dispatch = useDispatch()

    return(
        <>
            <Header/>
            <Profile/>
            <main id={style.main}>
                <div id={style.localVideos}>
                    {
                        State.videos.data.map(video => <HomeVideo data={video}/>)
                    }
                </div>
            </main>
        </>
    )
}

export default Home