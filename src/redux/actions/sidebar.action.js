import ACTIONS from "../actionType";

export const toggleSidebar = () => {
  return { type: ACTIONS.TOGGLE_SIDEBAR };
};

export const closeSidebar = () => {
  return { type: ACTIONS.CLOSE_SIDEBAR };
};
