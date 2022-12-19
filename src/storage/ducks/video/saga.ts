import { call, put } from "redux-saga/effects"
import api from "../../../context/api"
import { loadSuccess, loadFailure, loadRequest } from "./actions"
import { GetVideo,  Video } from "./types"

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