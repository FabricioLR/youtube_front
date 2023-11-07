import { call, put } from "redux-saga/effects"
import api from "../../../context/api"
import { addToHistoricFailure, addToHistoricRequest, addToHistoricSuccess, clearHistoricFailure, clearHistoricSuccess, getHistoricFailure, getHistoricSuccess } from "./actions"
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
    
        yield put(getHistoricSuccess(response.data.historic))
    } catch (error) {
        alert("Try again")
        yield put(getHistoricFailure())
    }
}

function addHistoric(data: AddHistoricData){
    return api.post("AddToHistoric", { videoId: data.videoId }, {
        headers: {
            token: data.token
        }
    })
}

export function* AddHistoric({ payload }: ReturnType<typeof addToHistoricRequest>){
    const token = sessionStorage.getItem("token")
    const { videoId } = payload as any

    try {
        const response: ResponseData = yield call(addHistoric, { token, videoId })
    
        yield put(addToHistoricSuccess())
    } catch (error) {
        yield put(addToHistoricFailure())
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
    
        yield put(clearHistoricSuccess())
    } catch (error) {
        yield put(clearHistoricFailure())
    }
}