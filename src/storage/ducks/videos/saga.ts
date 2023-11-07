import { call, put } from "redux-saga/effects"
import api from "../../../context/api"
import { getVideosFailure, getVideosSuccess, updateVisualizationsFailure, updateVisualizationsRequest, updateVisualizationsSuccess, uploadVideoFailure, uploadVideoRequest, uploadVideoSuccess } from "./actions"
import { UploadVideo, Video } from "./types"

type ResponseData = {
    data: {
        videos: Video[]
    }
}

type ResponseDataUV = {
    data: {
        video: Video
    }
}

type ResponseDataUVS = {
    data: {
        video: Video
    }
}

function getVideos(){
    return api.get("GetVideos")
}

function uploadVideo(data: Omit<UploadVideo, "navigate">){
    const formData = new FormData()
    formData.append("file", data.file)

    return api.post("CreateVideo", formData, {
        headers: {
            title: data.title,
            token: sessionStorage.getItem("token")
        }
    })
}

export function* GetVideos(){
    try {
        const response: ResponseData = yield call(getVideos)
        
        yield put(getVideosSuccess(response.data.videos))
    } catch (error) {
        yield put(getVideosFailure())
    }
}

export function* UploadVideo({ payload }: ReturnType<typeof uploadVideoRequest>){
    const { file, title, navigate } = payload as any

    try {
        const response: ResponseDataUV = yield call(uploadVideo, { file: file, title: title })
        navigate("/")
        navigate(0)
        yield put(uploadVideoSuccess())
    } catch (error) {
        alert("Try again")
        yield put(uploadVideoFailure())
    }
}

export function* UpdateVisualizations({ payload }: ReturnType<typeof updateVisualizationsRequest>){
    const videoId = payload
    
    try {
        const response: ResponseDataUVS = yield call(api.put, "UpdateVisualizations", { videoId })
        yield put(updateVisualizationsSuccess(response.data.video.id))
    } catch (error) {
        console.log(error)
        yield put(updateVisualizationsFailure())
    } 
}