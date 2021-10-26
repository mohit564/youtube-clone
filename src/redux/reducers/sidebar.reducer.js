import ACTIONS from "../actionType";

const sidebarReducer = (state = false, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_SIDEBAR:
      return !state;
    case ACTIONS.CLOSE_SIDEBAR:
      return false;
    default:
      return state;
  }
};

export default sidebarReducer;
