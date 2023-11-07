import { User } from "../../../context/auth"

export enum VideoTypes {
    "GET_VIDEO_REQUEST" = "@video/GET_VIDEO_REQUEST",
    "GET_VIDEO_SUCCESS" = "@video/GET_VIDEO_SUCCESS",
    "GET_VIDEO_FAILURE" = "@video/GET_VIDEO_FAILURE",

    "UPDATE_FEEDBACK_REQUEST" = "@video/UPDATE_REQUEST",
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

export type GetVideo = {
    videoId: string
}
export type UpdateVideo = {
    videoId: string
    type: string
}

export type VideoState = {
    readonly data: Video | null
    readonly loading: boolean
    readonly error: boolean
}