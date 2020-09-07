import {
  getPostsAsync,
  intialState,
  handleActions,
  postAsyncId,
  handleAsync,
} from "./postUtils";
import { getApiPosts, getApiPostId } from "./API";
import { create } from "./todos";
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

export const getPosts = getPostsAsync(GET_POSTS, getApiPosts, true);

export const getPost = postAsyncId(GET_POST, getApiPostId);

let initialState = {
  posts: intialState.initial(),
  post: {},
};

const getPostsReducer = handleActions(GET_POSTS, "posts", true);
const getPostReducer = handleAsync(GET_POST, "post");
export default function postApi(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);

    default:
      return state;
  }
}
