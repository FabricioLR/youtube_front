import React from 'react'
import ReactDOM from 'react-dom/client'
import "../global/global.css"
import { Provider } from "react-redux"

import App from './app'
import AuthProvider from "./context/auth"
import store from './storage'
import { VideosTypes } from './storage/ducks/videos/types'

store.dispatch({ type: VideosTypes.LOAD_REQUEST })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </Provider>
)
