/*
 * action types
 */
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_DRAWER_STATE = "SET_DRAWER_STATE";
export const SET_LOGIN_DROPDOWN_STATE = "SET_LOGIN_DROPDOWN_STATE";

/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

/*
 * action creators
 */
export function setUserName(name) {
  return { type: SET_USER_NAME, name };
}

export function setUserEmail(email) {
  return { type: SET_USER_EMAIL, email };
}

export function setDrawerState(openState) {
  return { type: SET_DRAWER_STATE, openState };
}

export function setLoginDropdownState(openState) {
  return { type: SET_LOGIN_DROPDOWN_STATE, openState };
}
