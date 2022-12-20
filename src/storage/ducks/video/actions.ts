import { action } from "typesafe-actions";
import { VideoTypes, Video, GetVideo, UpdateVideo } from "./types";

export const loadRequest = (payload: GetVideo) => action(VideoTypes.LOAD_REQUEST, { payload })
export const loadSuccess = (data: Video) => action(VideoTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(VideoTypes.LOAD_FAILURE)

export const updateRequest = (payload: UpdateVideo) => action(VideoTypes.UPDATE_REQUEST, { payload })