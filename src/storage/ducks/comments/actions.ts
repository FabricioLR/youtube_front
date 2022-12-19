import { action } from "typesafe-actions";
import { CommentsTypes, Comment, GetCommentsData, SendCommentData } from "./types";

export const loadRequest = (payload: GetCommentsData) => action(CommentsTypes.LOAD_REQUEST, { payload })
export const loadSuccess = (data: Comment[]) => action(CommentsTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(CommentsTypes.LOAD_FAILURE)

export const sendRequest = (payload: SendCommentData) => action(CommentsTypes.SEND_REQUEST, { payload })
export const sendSuccess = (data: Comment) => action(CommentsTypes.SEND_SUCCESS, { data })
export const sendFailure = () => action(CommentsTypes.SEND_FAILURE)