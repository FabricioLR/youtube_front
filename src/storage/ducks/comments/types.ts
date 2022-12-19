import { User } from "../user/types"

export enum CommentsTypes {
    "LOAD_REQUEST" = "@comments/LOAD_REQUEST",
    "LOAD_SUCCESS" = "@comments/LOAD_SUCCESS",
    "LOAD_FAILURE" = "@comments/LOAD_FAILURE",

    "SEND_REQUEST" = "@comments/send_REQUEST",
    "SEND_SUCCESS" = "@comments/send_SUCCESS",
    "SEND_FAILURE" = "@comments/send_FAILURE",
}

export type Comment = {
    comment: string
    user: Omit<User, "userVideos">
}

export type GetCommentsData = {
    videoId: string
}

export type SendCommentData = {
    videoId: string
    comment: string
    token: string | null
}

export type CommentsState = {
    readonly data: Comment[]
    readonly loading: boolean
    readonly error: boolean
}