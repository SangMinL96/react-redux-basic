export const getPostsAsync = (type, create, keepData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (id) => async (dispatch) => {
    dispatch({ type, keepData });
    try {
      const data = await create(id);
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
  loading: (state = null) => ({
    loading: true,
    data: state,
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
export const handleActions = (type, key, keepData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: intialState.loading(keepData ? state[key].data : null),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: intialState.success(action.data),
        };
      case ERROR:
        return {
          ...state,
          [key]: intialState.error(action.error),
        };
    }
  };
};
