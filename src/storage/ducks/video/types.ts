export enum VideoTypes {
    "LOAD_REQUEST" = "@video/LOAD_REQUEST",
    "LOAD_SUCCESS" = "@video/LOAD_SUCCESS",
    "LOAD_FAILURE" = "@video/LOAD_FAILURE",
}

export type Video = {
    title: string
    url: string
    visualizations: number
    id: string
    deslike: number
    like: number
    createdAt: string
    user: {
        name: string
        foto_url: string
        id: string
    }
}

export type GetVideo = {
    videoId: string
}

export type VideoState = {
    readonly data: Video | null
    readonly loading: boolean
    readonly error: boolean
}