import { Reducer } from "redux";
import { HistoricState, HistoricTypes } from "./types";

const INITIAL_STATE: HistoricState = {
    data: null,
    loading: false,
    error: false
}

const reducer: Reducer<HistoricState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case HistoricTypes.GET_HISTORIC_REQUEST:
            return { ...state, loading: true }
        case HistoricTypes.GET_HISTORIC_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case HistoricTypes.GET_HISTORIC_FAILURE:
            return { ...state, loading: false, error: true, data: null }
        case HistoricTypes.ADD_TO_HISTORIC_REQUEST:
            return { ...state, loading: true }
        case HistoricTypes.ADD_TO_HISTORIC_SUCCESS:
            return { ...state, loading: false, error: false } 
        case HistoricTypes.ADD_TO_HISTORIC_FAILURE:
            return { ...state, loading: false, error: true }
        case HistoricTypes.CLEAR_HISTORIC_REQUEST:
            return { ...state, loading: true, data: null }
        case HistoricTypes.CLEAR_HISTORIC_SUCCESS:
            return { ...state, loading: false, error: false } 
        case HistoricTypes.CLEAR_HISTORIC_FAILURE:
            return { ...state, loading: false, error: true }
        default:
            return state
    }
}

export default reducer