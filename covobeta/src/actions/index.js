/*
 * action types
 */
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const TOGGLE_LANG_MENU = "TOGGLE_LANG_MENU";
export const SET_FROM_ADDRESS = "SET_FROM_ADDRESS";
export const TOGGLE_LOGIN_POPOVER = "TOGGLE_LOGIN_POPOVER";
export const SET_USER_INFO_AND_SETTINGS = "SET_USER_INFO_AND_SETTINGS";
export const SET_USER_SIGNED_STATE = "SET_USER_SIGNED_STATE";

//New trip info
export const SET_NEW_ARRIVAL_PLACE_TEXT = "SET_NEW_ARRIVAL_PLACE_TEXT";
export const SET_NEW_DEPARTURE_PLACE_TEXT = "SET_NEW_DEPARTURE_PLACE_TEXT";
export const SET_NEW_SUB_DEPARTURE_RDV_TEXT = "SET_NEW_SUB_DEPARTURE_RDV_TEXT";
export const SET_NEW_DEPARTURE_TIMESTAMP = "SET_NEW_DEPARTURE_TIMESTAMP";
export const SET_READY_TO_PUSH = "SET_READY_TO_PUSH";

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

export function setUserInfoAndSettings(user) {
  return { type: SET_USER_INFO_AND_SETTINGS, user };
}

export function setUserSignedState(isSignedIn) {
  return { type: SET_USER_SIGNED_STATE, isSignedIn };
}

//New trip info
export function setCoVoArrivalPlace(arrivalPlaceTextbox) {
  return { type: SET_NEW_ARRIVAL_PLACE_TEXT, arrivalPlaceTextbox };
}
export function setDeparturePlaceTextbox(departurePlaceTextbox) {
  return { type: SET_NEW_DEPARTURE_PLACE_TEXT, departurePlaceTextbox };
}
export function setSubDepartureRdvText(subDepartureRdvText) {
  return { type: SET_NEW_SUB_DEPARTURE_RDV_TEXT, subDepartureRdvText };
}
export function setDepartureTimestamp(departureTimestamp) {
  return { type: SET_NEW_DEPARTURE_TIMESTAMP, departureTimestamp };
}
export function setReadyToPush(readyToPush) {
  return { type: SET_READY_TO_PUSH, readyToPush };
}
