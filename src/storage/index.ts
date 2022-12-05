import { configureStore, Store } from "@reduxjs/toolkit"
import createMiddleware from "redux-saga"

import rootReducer from "./ducks/rootReducer"
import rootSaga from "./ducks/rootSaga"
import { VideosState } from "./ducks/videos/types"

const sagaMiddleware = createMiddleware()

export type ApplicationState = {
    videos: VideosState
}

const store: Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
    }
})

sagaMiddleware.run(rootSaga)

export default store

