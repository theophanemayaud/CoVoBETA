//import { combineReducers } from "redux";
//import todos from './todos'
//import visibilityFilter from './visibilityFilter'
import { SET_USER_NAME, SET_USER_EMAIL } from "../actions";

var initialState = {
  isDrawerOpen: false,
  isLoginMenuOpen: false,
  userName: null,
  userEmail: null,
  userSettings: null,
  utils: null
};

export default function covoWebApp(state = initialState, action) {
  /* state = initialState is equivalent (it is the syntax
  to define the default, if undefined, props in javascript, to :
  if (typeof state === "undefined") {
    return initialState;
  }*/
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

/*const covoReducers = combineReducers({
  reducer1,
  reducer2
});

export default covoReducers;*/
