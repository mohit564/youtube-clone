import { combineReducers } from "redux";

import sidebar from "./sidebar.reducer";
import auth from "./auth.reducer";
import {
  popularVideosReducer as popularVideos,
  selectedVideoReducer as selectedVideo,
  relatedVideosReducer as relatedVideos,
  searchVideosReducer as searchVideos,
} from "./videos.reducer";

const rootReducer = combineReducers({
  sidebar,
  auth,
  popularVideos,
  selectedVideo,
  relatedVideos,
  searchVideos,
});

export default rootReducer;
