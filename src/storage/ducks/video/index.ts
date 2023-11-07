import { Reducer } from "redux";
import { VideoState, VideoTypes } from "./types";

const INITIAL_STATE: VideoState = {
    data: null,
    loading: false,
    error: false
}

const reducer: Reducer<VideoState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case VideoTypes.GET_VIDEO_REQUEST:
            return { ...state, loading: true, data: null }
        case VideoTypes.GET_VIDEO_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case VideoTypes.GET_VIDEO_FAILURE:
            return { ...state, loading: false, error: true, data: null }
        default:
            return state
    }
}

export default reducer