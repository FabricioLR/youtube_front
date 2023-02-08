import { User } from "../../../context/auth"

export enum VideoTypes {
    "LOAD_REQUEST" = "@video/LOAD_REQUEST",
    "LOAD_SUCCESS" = "@video/LOAD_SUCCESS",
    "LOAD_FAILURE" = "@video/LOAD_FAILURE",

    "UPDATE_REQUEST" = "@video/UPDATE_REQUEST",
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