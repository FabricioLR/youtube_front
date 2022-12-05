import { useEffect, useState } from "react";
import style from "./upload.module.css"
import { useDispatch } from "react-redux"
import { VideosState, VideosTypes } from "../../storage/ducks/videos/types";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

type StateData = {
    videos: VideosState
}

function Upload(){
    const navigate = useNavigate()
    const State = useSelector(state => state) as StateData
    const dispatch = useDispatch()
    const [ title, setTitle ] = useState("")
    const [ file, setFile ] = useState(null)

    async function uploadVideo(){
        dispatch({ type: VideosTypes.UPLOAD_REQUEST, payload: { title, file, navigate }})
    }

    return (
        <div id={style.upload}>
            <form onSubmit={(e) => {e.preventDefault(); uploadVideo()}} id={style.form}>
                <p>Upload Video</p>
                <div id={style.title}>
                    <input type="text" placeholder="Title" required onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div id={style.file}>
                    <input type="file" placeholder="Video" required accept=".mp4" onChange={(e: any) => setFile(e.target.files[0])}/>
                </div>
                <input type="submit" value="Upload" id={style.submit}/>
            </form>
        </div>
    )
}

export default Upload