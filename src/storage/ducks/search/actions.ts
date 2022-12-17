import { action } from "typesafe-actions";
import { SearchTypes, SearchVideos, Title } from "./types";

export const loadRequest = (payload: Title) => action(SearchTypes.LOAD_REQUEST, { payload })
export const loadSuccess = (data: SearchVideos[]) => action(SearchTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(SearchTypes.LOAD_FAILURE)