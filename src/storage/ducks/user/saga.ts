import { call, put } from "redux-saga/effects"
import api from "../../../context/api"
import { getUserFailure, getUserRequest, getUserSuccess } from "./actions"
import { User } from "./types"

type ResponseData = {
    data: {
        user: User
    }
}

type GetUserData = {
    userId: string
}

function getUser(data: GetUserData){
    return api.post("GetUser", { userId: data.userId })
}

export function* GetUser({ payload }: ReturnType<typeof getUserRequest>){
    const { userId } = payload as any

    try {
        const response: ResponseData = yield call(getUser, { userId })
    
        yield put(getUserSuccess(response.data.user))
    } catch (error) {
        alert("Try again")
        yield put(getUserFailure())
    }
}