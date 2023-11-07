import { Reducer } from "redux";
import { VideosState, VideosTypes } from "./types";

const INITIAL_STATE: VideosState = {
    data: [],
    loading: false,
    error: false
}

const reducer: Reducer<VideosState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case VideosTypes.GET_VIDEOS_REQUEST:
            return { ...state, loading: true }
        case VideosTypes.GET_VIDEOS_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case VideosTypes.GET_VIDEOS_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
        case VideosTypes.UPLOAD_VIDEO_REQUEST:
            return { ...state, loading: true }
        case VideosTypes.UPLOAD_VIDEO_SUCCESS:
            return { ...state, loading: false, error: false, }
        case VideosTypes.UPLOAD_VIDEO_FAILURE:
            return { ...state, loading: false, error: true, }
        case VideosTypes.UPDATE_VISUALIZATIONS_REQUEST:
            return { ...state, loading: true }
        case VideosTypes.UPDATE_VISUALIZATIONS_SUCCESS:
            var updatedVideo = state.data.filter(video => video.id == action.payload.videoId)
            updatedVideo[0].visualizations = updatedVideo[0].visualizations + 1
            const videos = state.data.filter(video => video.id == action.payload.videoId ? updatedVideo[0] : video)
            return { ...state, loading: false, error: false, data: videos }
        case VideosTypes.UPDATE_VISUALIZATIONS_FAILURE:
            return { ...state, loading: false, error: true, }
        default:
            return state
    }
}

export default reducer