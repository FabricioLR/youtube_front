import { Reducer } from "redux";
import { CommentsState, CommentsTypes } from "./types";

const INITIAL_STATE: CommentsState = {
    data: [],
    loading: false,
    error: false
}

const reducer: Reducer<CommentsState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CommentsTypes.GET_COMMENTS_REQUEST:
            return { ...state, loading: true, data: [] }
        case CommentsTypes.GET_COMMENTS_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case CommentsTypes.GET_COMMENTS_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
        case CommentsTypes.ADD_COMMENT_REQUEST:
            return { ...state, loading: true }
        case CommentsTypes.ADD_COMMENT_SUCCESS:
            return { ...state, loading: false, error: false, data: [...state.data, action.payload.data] }
        case CommentsTypes.ADD_COMMENT_FAILURE:
            return { ...state, loading: false, error: true }
        default:
            return state
    }
}

export default reducer