/*
 * action types
 */
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const TOGGLE_LOGIN_DROPDOWN = "TOGGLE_LOGIN_DROPDOWN";
export const SET_FROM_ADDRESS = "SET_FROM_ADDRESS";

/*
 * other constants
 */
export const uiThings = {
  TOGGLE_DRAWER: "TOGGLE_DRAWER",
  TOGGLE_LOGIN_DROPDOWN: "TOGGLE_LOGIN_DROPDOWN"
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

export function setDrawerState(isOpen) {
  return { type: TOGGLE_DRAWER, isOpen };
}

export function setLoginDropdownState(isOpen) {
  return { type: TOGGLE_LOGIN_DROPDOWN, isOpen };
}

export function setFromAddress(address) {
  return { type: SET_FROM_ADDRESS, address };
}
