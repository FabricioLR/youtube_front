import { action } from "typesafe-actions";
import { VideosTypes, Video, UploadVideo } from "./types";

export const loadRequest = () => action(VideosTypes.LOAD_REQUEST)
export const loadSuccess = (data: Video[]) => action(VideosTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(VideosTypes.LOAD_FAILURE)

export const uploadRequest = (payload: UploadVideo) => action(VideosTypes.UPLOAD_REQUEST, { payload })
export const uploadSuccess = () => action(VideosTypes.UPLOAD_SUCCESS)
export const uploadFailure = () => action(VideosTypes.UPLOAD_FAILURE)