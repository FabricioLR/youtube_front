import { Video } from "../videos/types"

export enum HistoricTypes {
    "GET_HISTORIC_REQUEST" = "@historic/GET_HISTORIC_REQUEST",
    "GET_HISTORIC_SUCCESS" = "@historic/GET_HISTORIC_SUCCESS",
    "GET_HISTORIC_FAILURE" = "@historic/GET_HISTORIC_FAILURE",

    "ADD_TO_HISTORIC_REQUEST" = "@historic/ADD_TO_HISTORIC_REQUEST",
    "ADD_TO_HISTORIC_SUCCESS" = "@historic/ADD_TO_HISTORIC_SUCCESS",
    "ADD_TO_HISTORIC_FAILURE" = "@historic/ADD_TO_HISTORIC_FAILURE",

    "CLEAR_HISTORIC_REQUEST" = "@historic/CLEAR_HISTORIC_REQUEST",
    "CLEAR_HISTORIC_SUCCESS" = "@historic/CLEAR_HISTORIC_SUCCESS",
    "CLEAR_HISTORIC_FAILURE" = "@historic/CLEAR_HISTORIC_FAILURE",
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