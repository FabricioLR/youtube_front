import { action } from "typesafe-actions";
import { HistoricTypes, Historic, PayloadData } from "./types";

export const getHistoricRequest = () => action(HistoricTypes.GET_HISTORIC_REQUEST)
export const getHistoricSuccess = (data: Historic[]) => action(HistoricTypes.GET_HISTORIC_SUCCESS, { data })
export const getHistoricFailure = () => action(HistoricTypes.GET_HISTORIC_FAILURE)

export const addToHistoricRequest = (payload: PayloadData) => action(HistoricTypes.ADD_TO_HISTORIC_REQUEST, { payload })
export const addToHistoricSuccess = () => action(HistoricTypes.ADD_TO_HISTORIC_SUCCESS)
export const addToHistoricFailure = () => action(HistoricTypes.ADD_TO_HISTORIC_FAILURE)

export const clearHistoricRequest = () => action(HistoricTypes.CLEAR_HISTORIC_REQUEST)
export const clearHistoricSuccess = () => action(HistoricTypes.CLEAR_HISTORIC_SUCCESS)
export const clearHistoricFailure = () => action(HistoricTypes.CLEAR_HISTORIC_FAILURE)
