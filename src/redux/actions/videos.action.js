import ACTIONS from "../actionType";
import request from "../../api";

export const fetchPopularVideos = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ACTIONS.POPULAR_VIDEOS_REQUEST });

      const response = await request.get("/videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 20,
        },
      });

      dispatch({
        type: ACTIONS.POPULAR_VIDEOS_SUCCESS,
        payload: {
          videos: response.data.items,
          nextPageToken: response.data.nextPageToken,
        },
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: ACTIONS.POPULAR_VIDEOS_FAIL,
        payload: error.message,
      });
    }
  };
};
