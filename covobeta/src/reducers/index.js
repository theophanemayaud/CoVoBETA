import { combineReducers } from "redux";
// component for firestore in state
import { firestoreReducer } from "redux-firestore";

//import todos from './todos'
//import visibilityFilter from './visibilityFilter'
import {
  uiThings,
  SET_USER_INFO_AND_SETTINGS,
  SET_USER_SIGNED_STATE,
  SET_FROM_ADDRESS,
  //newTripInfo related
  SET_NEW_COVO_DEPARTURE_PLACE,
  SET_NEW_COVO_ARRIVAL_PLACE,
  SET_NEW_SUB_DEPARTURE_RDV_POINT,
  SET_NEW_DEPARTURE_TIMESTAMP
} from "../actions";

var initialState = {
  uiState: {
    drawerIsOpen: false,
    langMenuIsOpen: false,
    loginPopoverIsOpen: false
  },
  userInfoAndSettings: {
    signedIn: false, // Local signed-in state.
    displayName: null,
    email: null,
    emailVerified: null,
    phoneNumber: null,
    photoURL: null,
    uid: null,
    accessToken: null
  },
  newTripInfo: {
    covoArrivalPlace: "",
    covoDeparturePlace: "",
    subDepartureRdvPoint: "",
    departureTimestamp: new Date()
  },
  utils: {
    toAddress: "",
    fromAddress: ""
  }
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
        drawerIsOpen: !action.isOpen
      });
    case uiThings.TOGGLE_LANG_MENU:
      return Object.assign({}, state, {
        langMenuIsOpen: !action.isOpen
      });
    case uiThings.TOGGLE_LOGIN_POPOVER:
      return Object.assign({}, state, {
        loginPopoverIsOpen: !action.isOpen
      });
    default:
      return state;
  }
}

function userInfoAndSettings(state = initialState.userInfoAndSettings, action) {
  switch (action.type) {
    case SET_USER_INFO_AND_SETTINGS:
      return Object.assign({}, state, action.user);
    case SET_USER_SIGNED_STATE:
      return Object.assign({}, state, { signedIn: action.isSignedIn });
    default:
      return state;
  }
}
function newTripInfo(state = initialState.newTripInfo, action) {
  switch (action.type) {
    case SET_NEW_COVO_ARRIVAL_PLACE:
      return Object.assign({}, state, {
        covoArrivalPlace: action.covoArrivalPlace
      });
    case SET_NEW_COVO_DEPARTURE_PLACE:
      return Object.assign({}, state, {
        covoDeparturePlace: action.covoDeparturePlace
      });
    case SET_NEW_SUB_DEPARTURE_RDV_POINT:
      return Object.assign({}, state, {
        subDepartureRdvPoint: action.subDepartureRdvPoint
      });
    case SET_NEW_DEPARTURE_TIMESTAMP:
      return Object.assign({}, state, {
        departureTimestamp: action.departureTimestamp
      });
    default:
      return state;
  }
}

function utils(state = initialState.utils, action) {
  switch (action.type) {
    case SET_FROM_ADDRESS:
      return Object.assign({}, state, {
        fromAddress: action.address
      });
    default:
      return state;
  }
}

const covoReducers = combineReducers({
  uiState,
  userInfoAndSettings,
  newTripInfo,
  utils,
  firestore: firestoreReducer
});
export default covoReducers;
