import { User } from "../../../context/auth"

export enum SearchTypes {
    "LOAD_REQUEST" = "@search/LOAD_REQUEST",
    "LOAD_SUCCESS" = "@search/LOAD_SUCCESS",
    "LOAD_FAILURE" = "@search/LOAD_FAILURE",
}

export type SearchVideos = {
    title: string
    url: string
    visualizations: number
    id: string
    deslike: number
    like: number
    createdAt: string
    user: User
}

export type Title = {
    title: string
    navigate: Function
}

export type SearchState = {
    readonly data: SearchVideos[]
    readonly loading: boolean
    readonly error: boolean
}