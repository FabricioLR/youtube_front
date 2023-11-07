import { User } from "../user/types"

export enum CommentsTypes {
    "GET_COMMENTS_REQUEST" = "@comments/GET_COMMENTS_REQUEST",
    "GET_COMMENTS_SUCCESS" = "@comments/GET_COMMENTS_SUCCESS",
    "GET_COMMENTS_FAILURE" = "@comments/GET_COMMENTS_FAILURE",

    "ADD_COMMENT_REQUEST" = "@comments/ADD_COMMENT_REQUEST",
    "ADD_COMMENT_SUCCESS" = "@comments/ADD_COMMENT_SUCCESS",
    "ADD_COMMENT_FAILURE" = "@comments/ADD_COMMENT_FAILURE",
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