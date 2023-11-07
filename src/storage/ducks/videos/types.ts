import { User } from "../../../context/auth"

export enum VideosTypes {
    "GET_VIDEOS_REQUEST" = "@videos/GET_VIDEOS_REQUEST",
    "GET_VIDEOS_SUCCESS" = "@videos/GET_VIDEOS_SUCCESS",
    "GET_VIDEOS_FAILURE" = "@videos/GET_VIDEOS_FAILURE",

    "UPLOAD_VIDEO_REQUEST" = "@videos/UPLOAD_VIDEO_REQUEST",
    "UPLOAD_VIDEO_SUCCESS" = "@videos/UPLOAD_VIDEO_SUCCESS",
    "UPLOAD_VIDEO_FAILURE" = "@videos/UPLOAD_VIDEO_FAILURE",

    "UPDATE_VISUALIZATIONS_REQUEST" = "@videos/UPDATE_VISUALIZATIONS_REQUEST",
    "UPDATE_VISUALIZATIONS_SUCCESS" = "@videos/UPDATE_VISUALIZATIONS_SUCCESS",
    "UPDATE_VISUALIZATIONS_FAILURE" = "@videos/UPDATE_VISUALIZATIONS_FAILURE",
}

export type Video = {
    title: string
    url: string
    visualizations: number
    id: string
    deslike: number
    like: number
    createdAt: string
    user: User
}

export type UploadVideo = {
    title: string
    file: File
    navigate: Function
}

export type UpdateVisualizations = {
    videoId: string
}

export type VideosState = {
    readonly data: Video[]
    readonly loading: boolean
    readonly error: boolean
}