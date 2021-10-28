import ACTIONS from "../actionType";

export const popularVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    error: null,
  },
  action
) => {
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

export const selectedVideoReducer = (
  state = {
    video: null,
    loading: true,
    error: null,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SELECTED_VIDEO_REQUEST:
      return { ...state, loading: true };
    case ACTIONS.SELECTED_VIDEO_SUCCESS:
      return { ...state, video: payload, loading: false };
    case ACTIONS.SELECTED_VIDEO_FAIL:
      return { ...state, video: null, error: payload, loading: false };
    default:
      return state;
  }
};

export const relatedVideosReducer = (
  state = {
    videos: [],
    loading: true,
    error: null,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.RELATED_VIDEOS_REQUEST:
      return { ...state, loading: true };
    case ACTIONS.RELATED_VIDEOS_SUCCESS:
      return { ...state, videos: payload, loading: false };
    case ACTIONS.RELATED_VIDEOS_FAIL:
      return { ...state, videos: [], error: payload, loading: false };
    default:
      return state;
  }
};
