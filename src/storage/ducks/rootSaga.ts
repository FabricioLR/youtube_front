import { all, takeLatest } from "redux-saga/effects"
import { VideosTypes } from "./videos/types"
import { GetVideos, UpdateVisualizations, UploadVideo } from "./videos/saga"
import { SearchTypes } from "./search/types"
import { SearchVideos } from "./search/saga"
import { UserTypes } from "./user/types"
import { GetUser } from "./user/saga"
import { HistoricTypes } from "./historic/types"
import { AddHistoric, ClearHistoric, GetHistoric } from "./historic/saga"
import { CommentsTypes } from "./comments/types"
import { GetComments, SendComment } from "./comments/saga"
import { VideoTypes } from "./video/types"
import { GetVideo, UpdateVideo } from "./video/saga"

export default function* rootSaga(){
    yield all([
        takeLatest(VideosTypes.LOAD_REQUEST, GetVideos),
        takeLatest(VideosTypes.UPLOAD_REQUEST, UploadVideo),
        takeLatest(VideosTypes.UPDATE_REQUEST, UpdateVisualizations),
        takeLatest(SearchTypes.LOAD_REQUEST, SearchVideos),
        takeLatest(UserTypes.LOAD_REQUEST, GetUser),
        takeLatest(HistoricTypes.LOAD_REQUEST, GetHistoric),
        takeLatest(HistoricTypes.ADD_REQUEST, AddHistoric),
        takeLatest(HistoricTypes.CLEAR_REQUEST, ClearHistoric),
        takeLatest(CommentsTypes.LOAD_REQUEST, GetComments),
        takeLatest(CommentsTypes.SEND_REQUEST, SendComment),
        takeLatest(VideoTypes.LOAD_REQUEST, GetVideo),
        takeLatest(VideoTypes.UPDATE_REQUEST, UpdateVideo)
    ])
}