export const getPostsAsync = (type, create, keepData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return () => async (dispatch) => {
    dispatch({ type, keepData });
    try {
      const data = await create();
      dispatch({ type: SUCCESS, data });
    } catch (error) {
      dispatch({ type: ERROR, error });
    }
  };
};
export const postAsyncId = (type, create) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (id) => async (dispatch) => {
    dispatch({ type, id });

    try {
      const data = await create(id);
      dispatch({ type: SUCCESS, data, id });
    } catch (error) {
      dispatch({ type: ERROR, error, id });
    }
  };
};
export const getSearchAsync = (type, create) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (text) => async (dispatch) => {
    dispatch({ type, text });

    try {
      const data = await create(text);
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

export const handleAsync = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    const id = action.id;
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            ...state.post,
            [id]: intialState.loading(state?.post[id]?.data),
          },
        };
      case SUCCESS:
        return {
          ...state,
          [key]: {
            ...state.post,
            [id]: intialState.success(action.data),
          },
        };
      case ERROR:
        return {
          ...state,
          [key]: {
            ...state.post,
            [id]: intialState.error(action.error),
          },
        };
    }
  };
};
export const handleSearch = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: intialState.loading(),
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
