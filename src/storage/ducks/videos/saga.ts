import { useNavigate } from "react-router-dom"
import { call, put } from "redux-saga/effects"
import api from "../../../context/api"
import { loadSuccess, loadFailure, uploadRequest, uploadFailure, uploadSuccess } from "./actions"
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
        yield put(loadSuccess(response.data.videos))
    } catch (error) {
        yield put(loadFailure())
    }
}

export function* UploadVideo({ payload }: ReturnType<typeof uploadRequest>){
    const { file, title, navigate } = payload as any

    try {
        const response: ResponseDataUV = yield call(uploadVideo, { file: file, title: title })
        navigate("/")
        yield put(uploadSuccess())
    } catch (error) {
        alert("Try again")
        yield put(uploadFailure())
    } 
}