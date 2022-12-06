import { Reducer } from "redux";
import { VideosState, VideosTypes } from "./types";

const INITIAL_STATE: VideosState = {
    data: [],
    loading: false,
    error: false
}

const reducer: Reducer<VideosState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case VideosTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case VideosTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case VideosTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
        case VideosTypes.UPLOAD_REQUEST:
            return { ...state, loading: true }
        case VideosTypes.UPLOAD_SUCCESS:
            return { ...state, loading: false, error: false, }
        case VideosTypes.UPLOAD_FAILURE:
            return { ...state, loading: false, error: true, }
        case VideosTypes.UPDATE_REQUEST:
            return { ...state, loading: true }
        case VideosTypes.UPDATE_SUCCESS:
            var updatedVideo = state.data.filter(video => video.id == action.payload.videoId)
            updatedVideo[0].visualizations = updatedVideo[0].visualizations + 1
            const videos = state.data.filter(video => video.id == action.payload.videoId ? updatedVideo[0] : video)
            return { ...state, loading: false, error: false, data: videos }
        case VideosTypes.UPDATE_FAILURE:
            return { ...state, loading: false, error: true, }
        default:
            return state
    }
}

export default reducer