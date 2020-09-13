import {
  getPostsAsync,
  intialState,
  handleActions,
  postAsyncId,
  handleAsync,
  getSearchAsync,
  handleSearch,
} from "./postUtils";
import { getApiPosts, getApiPostId, getSearchs } from "./API";
import { create } from "./todos";
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";
const GET_SEARCH = "GET_SEARCH";
const GET_SEARCH_SUCCESS = "GET_SEARCH_SUCCESS";
const GET_SEARCH_ERROR = "GET_SEARCH_ERROR";

export const getPosts = getPostsAsync(GET_POSTS, getApiPosts, true);

export const getPost = postAsyncId(GET_POST, getApiPostId);

export const getSearch = getSearchAsync(GET_SEARCH, getSearchs);

let initialState = {
  posts: intialState.initial(),
  post: {},
  search: intialState.initial(),
};

const getPostsReducer = handleActions(GET_POSTS, "posts", true);
const getPostReducer = handleAsync(GET_POST, "post");
const getSearchReducer = handleSearch(GET_SEARCH, "search");
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
    case GET_SEARCH:
    case GET_SEARCH_SUCCESS:
    case GET_SEARCH_ERROR:
      return getSearchReducer(state, action);
    default:
      return state;
  }
}
