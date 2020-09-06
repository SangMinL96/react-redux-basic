import { getPostsAsync, intialState } from "./postUtils";
import { getApiPosts, getApiPostId } from "./API";
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

export const getPosts = getPostsAsync(GET_POSTS, getApiPosts);

export const getPost = getPostsAsync(GET_POST, getApiPostId);

let initialState = {
  posts: intialState.initial(),
  post: intialState.initial(),
};

export default function postApi(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: intialState.loading() };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: intialState.success(action.data),
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: intialState.error(action.error),
      };
    case GET_POST:
      return { ...state, post: intialState.loading() };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: intialState.success(action.data),
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: intialState.error(action.error),
      };
    default:
      return state;
  }
}
