import ACTIONS from "../actionType";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  error: null,
};

export const popularVideosReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.POPULAR_VIDEOS_REQUEST:
      return { ...state, loading: true };
    case ACTIONS.POPULAR_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: [...state.videos, ...payload.videos],
        nextPageToken: payload.nextPageToken,
      };
    case ACTIONS.POPULAR_VIDEOS_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
