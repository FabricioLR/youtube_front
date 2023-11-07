import { call, put } from "redux-saga/effects"
import api from "../../../context/api"
import { searchSuccess, searchFailure, searchRequest} from "./actions"
import { SearchVideos, Title } from "./types"

type ResponseData = {
    data: {
        videos: SearchVideos[]
    }
}

function searchVideos(data: Omit<Title, "navigate">){
    return api.post("SearchVideos", { title: data.title})
}

export function* SearchVideos({ payload }: ReturnType<typeof searchRequest>){
    const { title, navigate } = payload as any

    try {
        const response: ResponseData = yield call(searchVideos, { title })
        navigate("/search")
        yield put(searchSuccess(response.data.videos))
    } catch (error) {
        alert("Try again")
        yield put(searchFailure())
    }
}