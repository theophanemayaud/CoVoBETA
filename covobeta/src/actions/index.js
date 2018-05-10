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
export const SET_NEW_COVO_ARRIVAL_PLACE = "SET_NEW_COVO_ARRIVAL_PLACE";
export const SET_NEW_COVO_DEPARTURE_PLACE = "SET_NEW_COVO_DEPARTURE_PLACE";
export const SET_NEW_SUB_DEPARTURE_RDV_POINT =
  "SET_NEW_SUB_DEPARTURE_RDV_POINT";
export const SET_NEW_DEPARTURE_TIMESTAMP = "SET_NEW_DEPARTURE_TIMESTAMP";

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
export function setCoVoArrivalPlace(covoArrivalPlace) {
  return { type: SET_NEW_COVO_ARRIVAL_PLACE, covoArrivalPlace };
}
export function setCovoDeparturePlace(covoDeparturePlace) {
  return { type: SET_NEW_COVO_DEPARTURE_PLACE, covoDeparturePlace };
}
export function setSubDepartureRdvPoint(subDepartureRdvPoint) {
  return { type: SET_NEW_SUB_DEPARTURE_RDV_POINT, subDepartureRdvPoint };
}
export function setDepartureTimestamp(departureTimestamp) {
  return { type: SET_NEW_DEPARTURE_TIMESTAMP, departureTimestamp };
}
