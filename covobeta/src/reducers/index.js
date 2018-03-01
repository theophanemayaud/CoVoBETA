import { combineReducers } from "redux";

//import todos from './todos'
//import visibilityFilter from './visibilityFilter'
import { SET_USER_NAME, SET_USER_EMAIL } from "../actions";
import uiThings from "../actions";

var initialState = {
  uiState: {
    isDrawerOpen: false,
    isLoginDropdownOpen: false
  },
  userInfoAndSettings: {
    userName: null,
    userEmail: null
  },
  utils: null
};

function uiState(state = initialState.uiState, action) {
  /* state = initialState.uiState is equivalent (it is the syntax
  to define the default, if undefined, props in javascript, to :
  if (typeof state === "undefined") {
    return initialState.uiState;
  }*/
  switch (action.type) {
    case uiThings.TOGGLE_DRAWER:
      return Object.assign({}, state, {
        isDrawerOpen: action.isOpen
      });
      break;
    case uiThings.TOGGLE_LOGIN_DROPDOWN:
      return Object.assign({}, state, {
        isLoginDropdownOpen: action.isOpen
      });
      break;
    default:
      return state;
  }
}

function userInfoAndSettings(state = initialState.userInfoAndSettings, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return Object.assign({}, state, {
        userName: action.name
      });
    case SET_USER_EMAIL:
      return Object.assign({}, state, {
        userEmail: action.email
      });
    default:
      return state;
  }
}

function utils(state = initialState.utils, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const covoReducers = combineReducers({
  uiState,
  userInfoAndSettings,
  utils
});
export default covoReducers;
