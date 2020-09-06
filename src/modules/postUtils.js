import axios from "axios";

export const getPostsAsync = (type, create) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    console.dir(param);
    dispatch({ type });
    try {
      const data = await create(param);
      dispatch({ type: SUCCESS, data });
    } catch (error) {
      dispatch({ type: ERROR, error });
    }
  };
};

export const intialState = {
  initial: () => ({
    loading: false,
    data: null,
    error: null,
  }),
  loading: () => ({
    loading: true,
    data: null,
    error: null,
  }),
  success: (data) => ({
    loading: false,
    data,
    error: null,
  }),
  error: (error) => ({
    loading: false,
    data: null,
    error,
  }),
};
