import { action } from "typesafe-actions";
import { VideosTypes, Video, UploadVideo, UpdateVisualizations } from "./types";

export const getVideosRequest = () => action(VideosTypes.GET_VIDEOS_REQUEST)
export const getVideosSuccess = (data: Video[]) => action(VideosTypes.GET_VIDEOS_SUCCESS, { data })
export const getVideosFailure = () => action(VideosTypes.GET_VIDEOS_FAILURE)

export const uploadVideoRequest = (payload: UploadVideo) => action(VideosTypes.UPLOAD_VIDEO_REQUEST, { payload })
export const uploadVideoSuccess = () => action(VideosTypes.UPLOAD_VIDEO_SUCCESS)
export const uploadVideoFailure = () => action(VideosTypes.UPLOAD_VIDEO_FAILURE)

export const updateVisualizationsRequest = (payload: UpdateVisualizations) => action(VideosTypes.UPDATE_VISUALIZATIONS_REQUEST, { payload })
export const updateVisualizationsSuccess = (videoId: string) => action(VideosTypes.UPDATE_VISUALIZATIONS_SUCCESS, { videoId })
export const updateVisualizationsFailure = () => action(VideosTypes.UPDATE_VISUALIZATIONS_FAILURE)