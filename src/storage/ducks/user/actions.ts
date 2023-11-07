import { action } from "typesafe-actions";
import { UserTypes, User, PayloadData } from "./types";

export const getUserRequest = (payload: PayloadData) => action(UserTypes.GET_USER_REQUEST, { payload })
export const getUserSuccess = (data: User) => action(UserTypes.GET_USER_SUCCESS, { data })
export const getUserFailure = () => action(UserTypes.GET_USER_FAILURE)
