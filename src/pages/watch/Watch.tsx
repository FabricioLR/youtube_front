import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import useQuery from "../../context/query"
import style from "./watch.module.css"
import Header from "../../components/header/Header"
import Profile from "../../components/profile/profile"
import { useNavigate } from "react-router-dom"
import { CommentsState, CommentsTypes } from "../../storage/ducks/comments/types"
import Comment from "../../components/comment/Comment"
import { useDispatch } from "react-redux"
import { VideoState, VideoTypes } from "../../storage/ducks/video/types"
import WatchVideo from "../../components/video/watchVideo/WatchVideo"

type StateData = {
    video: VideoState
    comments: CommentsState
}

function Watch(){
    const [comment, setComment] = useState("")
    const query = useQuery()
    const State = useSelector(state => state) as StateData
    const dispatch = useDispatch()

    function sendComment(){
        if (comment != ""){
            dispatch({ type: CommentsTypes.SEND_REQUEST, payload: { videoId: query.get("v"), comment }})
            setComment("")
        }
    }

    useEffect(() => {
        dispatch({ type: VideoTypes.LOAD_REQUEST, payload: { videoId: query.get("v") }})
        dispatch({ type: CommentsTypes.LOAD_REQUEST, payload: { videoId: query.get("v") } })
    }, [])

    return(
        <>
            <Header/>
            <Profile/>
            {
                State.video.data ? 
                    <WatchVideo video={State.video.data}/>
                :
                    <div id={style.localVideo}></div>
            }
            <div id={style.comments}>
                <div id={style.sendComment}>
                    <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} onKeyUp={(key) => {
                        if(key.key == "Enter"){
                            sendComment()
                        }
                    }}/>
                    <button onClick={sendComment}>Send</button>
                </div>
                {
                    State.comments.data?.map(comment => <Comment comment={comment}/>) 
                }
            </div>
        </>
    )
}

export default Watch