import { Video } from "../videos/types"

export enum HistoricTypes {
    "LOAD_REQUEST" = "@historic/LOAD_REQUEST",
    "LOAD_SUCCESS" = "@historic/LOAD_SUCCESS",
    "LOAD_FAILURE" = "@historic/LOAD_FAILURE",

    "ADD_REQUEST" = "@historic/ADD_REQUEST",
    "ADD_SUCCESS" = "@historic/ADD_SUCCESS",
    "ADD_FAILURE" = "@historic/ADD_FAILURE",

    "CLEAR_REQUEST" = "@historic/CLEAR_REQUEST",
    "CLEAR_SUCCESS" = "@historic/CLEAR_SUCCESS",
    "CLEAR_FAILURE" = "@historic/CLEAR_FAILURE",
}

export type Historic = {
    name: string
    id: string
    profileImage: string
    videos: Omit<Video, "user">[]
}

export type PayloadData = {
    videoId: string
}

export type HistoricState = {
    readonly data: Historic | null
    readonly loading: boolean
    readonly error: boolean
}