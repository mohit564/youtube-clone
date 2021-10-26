import { combineReducers } from "redux";

import sidebar from "./sidebar.reducer";
import auth from "./auth.reducer";

const rootReducer = combineReducers({
  sidebar,
  auth,
});

export default rootReducer;
