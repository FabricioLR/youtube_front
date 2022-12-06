import { all, takeLatest } from "redux-saga/effects"
import { VideosTypes } from "./videos/types"
import { GetVideos, UpdateVisualizations, UploadVideo } from "./videos/saga"

export default function* rootSaga(){
    yield all([
        takeLatest(VideosTypes.LOAD_REQUEST, GetVideos),
        takeLatest(VideosTypes.UPLOAD_REQUEST, UploadVideo),
        takeLatest(VideosTypes.UPDATE_REQUEST, UpdateVisualizations)
    ])
}