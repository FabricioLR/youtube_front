import { call, put } from "redux-saga/effects"
import api from "../../../context/api"
import { loadSuccess, loadFailure, loadRequest, updateRequest } from "./actions"
import { GetVideo,  UpdateVideo,  Video } from "./types"

type ResponseData = {
    data: {
        video: Video
    }
}

function getVideo(data: GetVideo){
    return api.post("GetVideo", {
        videoId: data.videoId
    })
}

function updateVideo(data: UpdateVideo){
    api.post("AddFeedback", {
        videoId: data.videoId,
        type: data.type
    })
}

export function* GetVideo({ payload }: ReturnType<typeof loadRequest>){
    const { videoId } = payload as any
    
    try {
        const response: ResponseData = yield call(getVideo, { videoId })
        yield put(loadSuccess(response.data.video))
    } catch (error) {
        console.log(error)
        yield put(loadFailure())
    } 
}

export function* UpdateVideo({ payload }: ReturnType<typeof updateRequest>){
    const { videoId, type } = payload as any
    
    try {
        yield call(updateVideo, { videoId, type })
    } catch (error) {
        console.log(error)
    } 
}