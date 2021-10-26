import firebase from "firebase/compat/app";
import auth from "../../firebase";
import ACTIONS from "../actionType";

export const login = () => {
  return async (dispatch) => {
    try {
      // START LOGIN REQUEST
      dispatch({ type: ACTIONS.LOGIN_REQUEST });
      const provider = new firebase.auth.GoogleAuthProvider();
      const response = await auth.signInWithPopup(provider);

      // EXTRACT ACCESS TOKEN FROM RESPONSE
      const accessToken = response.credential.accessToken;
      dispatch({ type: ACTIONS.LOGIN_SUCCESS, payload: accessToken });

      // EXTRACT USER INFO FROM RESPONSE
      const profile = {
        name: response.additionalUserInfo.profile.name,
        avatar: response.additionalUserInfo.profile.picture,
      };
      dispatch({ type: ACTIONS.LOAD_PROFILE, payload: profile });

      // STORE USER DATA IN SESSION STORAGE
      sessionStorage.setItem("ACCESS_TOKEN", accessToken);
      sessionStorage.setItem("USER", JSON.stringify(profile));
    } catch (error) {
      // AFTER LOGIN FAIL
      console.error(error);
      dispatch({ type: ACTIONS.LOGIN_FAIL, payload: error.message });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      // START LOGOUT REQUEST
      await auth.signOut();
      dispatch({ type: ACTIONS.LOG_OUT });

      // CLEAR SESSION STORAGE
      sessionStorage.removeItem("ACCESS_TOKEN");
      sessionStorage.removeItem("USER");
    } catch (error) {
      console.error(error);
    }
  };
};
