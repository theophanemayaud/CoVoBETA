/*
 * action types
 */
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const TOGGLE_LANG_MENU = "TOGGLE_LANG_MENU";
export const SET_FROM_ADDRESS = "SET_FROM_ADDRESS";
export const TOGGLE_LOGIN_POPOVER = "TOGGLE_LOGIN_POPOVER";

/*
 * other constants
 */
export const uiThings = {
  TOGGLE_DRAWER: "TOGGLE_DRAWER",
  TOGGLE_LANG_MENU: "TOGGLE_LANG_MENU",
  TOGGLE_LOGIN_POPOVER: "TOGGLE_LOGIN_POPOVER"
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

export function toggleDrawerState(isOpen) {
  return { type: TOGGLE_DRAWER, isOpen };
}

export function toggleLangMenu(isOpen) {
  return { type: TOGGLE_LANG_MENU, isOpen };
}

export function setFromAddress(address) {
  return { type: SET_FROM_ADDRESS, address };
}

export function toggleLoginPopover(isOpen) {
  return { type: TOGGLE_LOGIN_POPOVER, isOpen };
}
