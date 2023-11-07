import { action } from "typesafe-actions";
import { CommentsTypes, Comment, GetCommentsData, SendCommentData } from "./types";

export const getCommentsRequest = (payload: GetCommentsData) => action(CommentsTypes.GET_COMMENTS_REQUEST, { payload })
export const getCommentsSuccess = (data: Comment[]) => action(CommentsTypes.GET_COMMENTS_SUCCESS, { data })
export const getCommentsFailure = () => action(CommentsTypes.GET_COMMENTS_FAILURE)

export const addCommentRequest = (payload: SendCommentData) => action(CommentsTypes.ADD_COMMENT_REQUEST, { payload })
export const addCommentSuccess = (data: Comment) => action(CommentsTypes.ADD_COMMENT_SUCCESS, { data })
export const addCommentFailure = () => action(CommentsTypes.ADD_COMMENT_FAILURE)