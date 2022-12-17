import { action } from "typesafe-actions";
import { HistoricTypes, Historic, PayloadData } from "./types";

export const loadRequest = () => action(HistoricTypes.LOAD_REQUEST)
export const loadSuccess = (data: Historic[]) => action(HistoricTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(HistoricTypes.LOAD_FAILURE)

export const addRequest = (payload: PayloadData) => action(HistoricTypes.ADD_REQUEST, { payload })
export const addSuccess = () => action(HistoricTypes.ADD_SUCCESS)
export const addFailure = () => action(HistoricTypes.ADD_FAILURE)

export const clearRequest = () => action(HistoricTypes.CLEAR_REQUEST)
export const clearSuccess = () => action(HistoricTypes.CLEAR_SUCCESS)
export const clearFailure = () => action(HistoricTypes.CLEAR_FAILURE)
