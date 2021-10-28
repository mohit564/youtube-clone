import ACTIONS from "../actionType";
import request from "../../api";

export const fetchPopularVideos = () => {
  return async (dispatch, getState) => {
    try {
      // START REQUEST
      dispatch({ type: ACTIONS.POPULAR_VIDEOS_REQUEST });

      // FETCH POPULAR VIDEOS DATA
      const response = await request.get("/videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 20,
          pageToken: getState().popularVideos.nextPageToken,
        },
      });

      // SAVE POPULAR VIDEO DETAILS INTO REDUX STORE
      dispatch({
        type: ACTIONS.POPULAR_VIDEOS_SUCCESS,
        payload: {
          videos: response.data.items,
          nextPageToken: response.data.nextPageToken,
        },
      });
    } catch (error) {
      // REQUEST FAILED
      console.error(error);
      dispatch({
        type: ACTIONS.POPULAR_VIDEOS_FAIL,
        payload: error.message,
      });
    }
  };
};

export const fetchVideoById = (id) => {
  return async (dispatch) => {
    try {
      // START REQUEST
      dispatch({
        type: ACTIONS.SELECTED_VIDEO_REQUEST,
      });

      // GET THE DATA
      const response = await request.get("/videos", {
        params: { part: "snippet,contentDetails, statistics", id: id },
      });

      // SAVE VIDEO DETAILS INTO REDUX STORE
      dispatch({
        type: ACTIONS.SELECTED_VIDEO_SUCCESS,
        payload: response.data.items[0],
      });
    } catch (error) {
      // REQUEST FAILED
      dispatch({
        type: ACTIONS.SELECTED_VIDEO_FAIL,
        payload: error.message,
      });
      console.error(error);
    }
  };
};

export const fetchRelatedVideos = (id) => {
  return async (dispatch) => {
    try {
      // START REQUEST
      dispatch({
        type: ACTIONS.RELATED_VIDEOS_REQUEST,
      });

      // GET THE DATA
      const response = await request.get("/search", {
        params: {
          part: "snippet",
          relatedToVideoId: id,
          maxResults: 10,
          type: "video",
        },
      });

      // SAVE VIDEO DETAILS INTO REDUX STORE
      dispatch({
        type: ACTIONS.RELATED_VIDEOS_SUCCESS,
        payload: response.data.items,
      });
    } catch (error) {
      // REQUEST FAILED
      dispatch({
        type: ACTIONS.RELATED_VIDEOS_FAIL,
        payload: error.message,
      });
      console.error(error);
    }
  };
};
