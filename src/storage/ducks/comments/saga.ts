import { useNavigate } from "react-router-dom"
import { call, put } from "redux-saga/effects"
import api from "../../../context/api"
import { loadSuccess, loadFailure, loadRequest, sendRequest, sendSuccess, sendFailure } from "./actions"
import { Comment, GetCommentsData, SendCommentData } from "./types"

type ResponseData = {
    data: {
        comments: Comment[]
    }
}

type ResponseDataS = {
    data: {
        comment: Comment
    }
}

function getComments(data: GetCommentsData){
    return api.post("GetVideoComments", {
        videoId: data.videoId
    })
}

function sendComment(data: SendCommentData){
    return api.post("AddComment", {
        videoId: data.videoId,
        comment: data.comment
    }, {
        headers: {
            token: data.token
        }
    })
}


export function* GetComments({ payload }: ReturnType<typeof loadRequest>){
    const { videoId } = payload as any

    try {
        const response: ResponseData = yield call(getComments, { videoId })
        yield put(loadSuccess(response.data.comments))
    } catch (error) {
        yield put(loadFailure())
    }
}

export function* SendComment({ payload }: ReturnType<typeof sendRequest>){
    const { videoId, comment } = payload as any
    const token = sessionStorage.getItem("token")

    try {
        const response: ResponseDataS = yield call(sendComment, { videoId, comment, token })
        yield put(sendSuccess(response.data.comment))
    } catch (error) {
        yield put(sendFailure())
    }
}