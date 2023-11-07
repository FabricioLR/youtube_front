import { User } from "../../../context/auth"

export enum SearchTypes {
    "SEARCH_REQUEST" = "@search/SEARCH_REQUEST",
    "SEARCH_SUCCESS" = "@search/SEARCH_SUCCESS",
    "SEARCH_FAILURE" = "@search/SEARCH_FAILURE",
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