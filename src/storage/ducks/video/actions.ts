import { action } from "typesafe-actions";
import { VideoTypes, Video, GetVideo, UpdateVideo } from "./types";

export const getVideoRequest = (payload: GetVideo) => action(VideoTypes.GET_VIDEO_REQUEST, { payload })
export const getVideoSuccess = (data: Video) => action(VideoTypes.GET_VIDEO_SUCCESS, { data })
export const getVideoFailure = () => action(VideoTypes.GET_VIDEO_FAILURE)

export const updateFeedbackRequest = (payload: UpdateVideo) => action(VideoTypes.UPDATE_FEEDBACK_REQUEST, { payload })