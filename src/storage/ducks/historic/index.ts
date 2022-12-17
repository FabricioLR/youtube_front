import { Reducer } from "redux";
import { HistoricState, HistoricTypes } from "./types";

const INITIAL_STATE: HistoricState = {
    data: null,
    loading: false,
    error: false
}

const reducer: Reducer<HistoricState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case HistoricTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case HistoricTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case HistoricTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: null }
        case HistoricTypes.ADD_REQUEST:
            return { ...state, loading: true }
        case HistoricTypes.ADD_SUCCESS:
            return { ...state, loading: false, error: false } 
        case HistoricTypes.ADD_FAILURE:
            return { ...state, loading: false, error: true }
        case HistoricTypes.CLEAR_REQUEST:
            return { ...state, loading: true, data: null }
        case HistoricTypes.CLEAR_SUCCESS:
            return { ...state, loading: false, error: false } 
        case HistoricTypes.CLEAR_FAILURE:
            return { ...state, loading: false, error: true }
        default:
            return state
    }
}

export default reducer