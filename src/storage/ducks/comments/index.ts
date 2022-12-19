import { Reducer } from "redux";
import { CommentsState, CommentsTypes } from "./types";

const INITIAL_STATE: CommentsState = {
    data: [],
    loading: false,
    error: false
}

const reducer: Reducer<CommentsState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CommentsTypes.LOAD_REQUEST:
            return { ...state, loading: true, data: [] }
        case CommentsTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case CommentsTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
        case CommentsTypes.SEND_REQUEST:
            return { ...state, loading: true }
        case CommentsTypes.SEND_SUCCESS:
            return { ...state, loading: false, error: false, data: [...state.data, action.payload.data] }
        case CommentsTypes.SEND_FAILURE:
            return { ...state, loading: false, error: true }
        default:
            return state
    }
}

export default reducer