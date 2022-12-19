import { action } from "typesafe-actions";
import { VideoTypes, Video, GetVideo } from "./types";

export const loadRequest = (payload: GetVideo) => action(VideoTypes.LOAD_REQUEST, { payload })
export const loadSuccess = (data: Video) => action(VideoTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(VideoTypes.LOAD_FAILURE)