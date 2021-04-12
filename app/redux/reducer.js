export const initState = {
  data: [],
  loading: true,
};

export const reducer = (state, action) => {
  if (action.type === "GET_DATA") {
    return {
      ...state,
      data: action.payload,
    };
  }
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      loading: action.payload,
    };
  }

  return state;
};
