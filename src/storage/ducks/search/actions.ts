import { action } from "typesafe-actions";
import { SearchTypes, SearchVideos, Title } from "./types";

export const searchRequest = (payload: Title) => action(SearchTypes.SEARCH_REQUEST, { payload })
export const searchSuccess = (data: SearchVideos[]) => action(SearchTypes.SEARCH_SUCCESS, { data })
export const searchFailure = () => action(SearchTypes.SEARCH_FAILURE)