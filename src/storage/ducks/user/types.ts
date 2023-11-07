import { Video } from "../videos/types"

export enum UserTypes {
    "GET_USER_REQUEST" = "@user/GET_USER_REQUEST",
    "GET_USER_SUCCESS" = "@user/GET_USER_SUCCESS",
    "GET_USER_FAILURE" = "@user/GET_USER_FAILURE",
}

export type User = {
    id: string
    name: string
    profileImage: string
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