import { User } from "../../../context/auth"

export enum VideosTypes {
    "LOAD_REQUEST" = "@videos/LOAD_REQUEST",
    "LOAD_SUCCESS" = "@videos/LOAD_SUCCESS",
    "LOAD_FAILURE" = "@videos/LOAD_FAILURE",

    "UPLOAD_REQUEST" = "@videos/UPLOAD_REQUEST",
    "UPLOAD_SUCCESS" = "@videos/UPLOAD_SUCCESS",
    "UPLOAD_FAILURE" = "@videos/UPLOAD_FAILURE",

    "UPDATE_REQUEST" = "@videos/UPDATE_REQUEST",
    "UPDATE_SUCCESS" = "@videos/UPDATE_SUCCESS",
    "UPDATE_FAILURE" = "@videos/UPDATE_FAILURE",
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