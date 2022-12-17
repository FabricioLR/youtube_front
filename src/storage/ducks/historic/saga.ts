import { call, put } from "redux-saga/effects"
import api from "../../../context/api"
import { loadSuccess, loadFailure, addRequest, addFailure, addSuccess, clearSuccess, clearFailure } from "./actions"
import { Historic } from "./types"

type ResponseData = {
    data: {
        historic: Historic[]
    }
}

type GetHistoricData = {
    token: string | null
}

type AddHistoricData = {
    token: string | null
    videoId: string
}

type ClearHistoricData = {
    token: string | null
}

function getHistoric(data: GetHistoricData){
    return api.get("GetHistoric", {
        headers: {
            token: data.token
        }
    })
}

export function* GetHistoric(){
    const token = sessionStorage.getItem("token")

    try {
        const response: ResponseData = yield call(getHistoric, { token })

        console.log(response.data)
    
        yield put(loadSuccess(response.data.historic))
    } catch (error) {
        alert("Try again")
        yield put(loadFailure())
    }
}

function addHistoric(data: AddHistoricData){
    return api.post("AddToHistoric", { videoId: data.videoId }, {
        headers: {
            token: data.token
        }
    })
}

export function* AddHistoric({ payload }: ReturnType<typeof addRequest>){
    const token = sessionStorage.getItem("token")
    const { videoId } = payload as any

    try {
        const response: ResponseData = yield call(addHistoric, { token, videoId })
    
        yield put(addSuccess())
    } catch (error) {
        yield put(addFailure())
    }
}

function clearHistoric(data: ClearHistoricData){
    return api.get("ClearHistoric",  {
        headers: {
            token: data.token
        }
    })
}

export function* ClearHistoric(){
    const token = sessionStorage.getItem("token")

    try {
        const response: ResponseData = yield call(clearHistoric, { token })
    
        yield put(clearSuccess())
    } catch (error) {
        yield put(clearFailure())
    }
}