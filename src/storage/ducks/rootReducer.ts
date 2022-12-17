import { combineReducers } from "redux"

import videos from "./videos/index"
import search from "./search/index"
import user from "./user/index"
import historic from "./historic/index"

export default combineReducers({
    videos, search, user, historic
})