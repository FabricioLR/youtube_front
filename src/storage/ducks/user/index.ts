import { Reducer } from "redux";
import { UserState, UserTypes } from "./types";

const INITIAL_STATE: UserState = {
    data: null,
    loading: false,
    error: false
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case UserTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case UserTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case UserTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: null }
        default:
            return state
    }
}

export default reducer