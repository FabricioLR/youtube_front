export enum VideosTypes {
    "LOAD_REQUEST" = "@videos/LOAD_REQUEST",
    "LOAD_SUCCESS" = "@videos/LOAD_SUCCESS",
    "LOAD_FAILURE" = "@videos/LOAD_FAILURE",

    "UPLOAD_REQUEST" = "@videos/UPLOAD_REQUEST",
    "UPLOAD_SUCCESS" = "@videos/UPLOAD_SUCCESS",
    "UPLOAD_FAILURE" = "@videos/UPLOAD_FAILURE",
}

export type Video = {
    title: string
    url: string
    visualizations: number
    user: {
        name: string
        foto_url: string
    }
}

export type UploadVideo = {
    title: string
    file: File
    navigate: Function
}

export type VideosState = {
    readonly data: Video[]
    readonly loading: boolean
    readonly error: boolean
}