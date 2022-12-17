import { Video } from "../videos/types"

export enum UserTypes {
    "LOAD_REQUEST" = "@user/LOAD_REQUEST",
    "LOAD_SUCCESS" = "@user/LOAD_SUCCESS",
    "LOAD_FAILURE" = "@user/LOAD_FAILURE",
}

export type User = {
    id: string
    name: string
    foto_url: string
    userVideos: Omit<Video, "user">[]
}

export type PayloadData = {
    userId: string
}

export type UserState = {
    readonly data: User | null
    readonly loading: boolean
    readonly error: boolean
}