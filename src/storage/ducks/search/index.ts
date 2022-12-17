import { Reducer } from "redux";
import { SearchState, SearchTypes } from "./types";

const INITIAL_STATE: SearchState = {
    data: [],
    loading: false,
    error: false
}

const reducer: Reducer<SearchState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SearchTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case SearchTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case SearchTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
        default:
            return state
    }
}

export default reducer