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
        takeLatest(VideosTypes.GET_VIDEOS_REQUEST, GetVideos),
        takeLatest(VideosTypes.UPLOAD_VIDEO_REQUEST, UploadVideo),
        takeLatest(VideosTypes.UPDATE_VISUALIZATIONS_REQUEST, UpdateVisualizations),
        takeLatest(SearchTypes.SEARCH_REQUEST, SearchVideos),
        takeLatest(UserTypes.GET_USER_REQUEST, GetUser),
        takeLatest(HistoricTypes.GET_HISTORIC_REQUEST, GetHistoric),
        takeLatest(HistoricTypes.ADD_TO_HISTORIC_REQUEST, AddHistoric),
        takeLatest(HistoricTypes.CLEAR_HISTORIC_REQUEST, ClearHistoric),
        takeLatest(CommentsTypes.GET_COMMENTS_REQUEST, GetComments),
        takeLatest(CommentsTypes.ADD_COMMENT_REQUEST, SendComment),
        takeLatest(VideoTypes.GET_VIDEO_REQUEST, GetVideo),
        takeLatest(VideoTypes.UPDATE_FEEDBACK_REQUEST, UpdateVideo)
    ])
}