import { action } from "typesafe-actions";
import { UserTypes, User, PayloadData } from "./types";

export const loadRequest = (payload: PayloadData) => action(UserTypes.LOAD_REQUEST, { payload })
export const loadSuccess = (data: User) => action(UserTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(UserTypes.LOAD_FAILURE)
