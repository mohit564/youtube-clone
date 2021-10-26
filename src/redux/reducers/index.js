import { combineReducers } from "redux";

import sidebar from "./sidebar.reducer";
import auth from "./auth.reducer";
import { popularVideosReducer as popularVideos } from "./videos.reducer";

const rootReducer = combineReducers({
  sidebar,
  auth,
  popularVideos,
});

export default rootReducer;
