import { configureStore, Store } from "@reduxjs/toolkit"
import createMiddleware from "redux-saga"
import { HistoricState } from "./ducks/historic/types"

import rootReducer from "./ducks/rootReducer"
import rootSaga from "./ducks/rootSaga"
import { SearchState } from "./ducks/search/types"
import { UserState } from "./ducks/user/types"
import { VideosState } from "./ducks/videos/types"

const sagaMiddleware = createMiddleware()

export type ApplicationState = {
    videos: VideosState
    search: SearchState
    user: UserState
    historic: HistoricState
}

const store: Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
    }
})

sagaMiddleware.run(rootSaga)

export default store

