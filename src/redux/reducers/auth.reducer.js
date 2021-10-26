import ACTIONS from "../actionType";

const initialState = {
  accessToken: sessionStorage.getItem("ACCESS_TOKEN") || null,
  user: JSON.parse(sessionStorage.getItem("USER")) || null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.LOGIN_REQUEST:
      return { ...state, loading: true };
    case ACTIONS.LOGIN_SUCCESS:
      return { ...state, accessToken: payload, loading: false };
    case ACTIONS.LOGIN_FAIL:
      return { ...state, accessToken: null, loading: false, error: payload };
    case ACTIONS.LOAD_PROFILE:
      return { ...state, user: payload };
    case ACTIONS.LOG_OUT:
      return { ...state, accessToken: null, user: null };
    default:
      return state;
  }
};

export default authReducer;
