# Time of elements is from oldest at the bottom to newset at the top

## :arrow_down: v0.0.2 Starting work on adding trip

* Taking a step back, will start new approach : build piece by piece with faked till realized connection points to other pieces

  * About covo places :
    * so, covo places will be 10mx10m squares at the equator. There are 360deg for ~40 000 000 m or 0.00009degree per 10m at the equator. Round that to 0.0001 deg making 11.1111m at the equator.
    * so geocoordinates are +90 (north) -90 south, +180 (east) -180 (west), there will be from 0 to +90 : 90/.0001=900 000 covo places north and south, times 180/.0001=1 800 000 east and west.

* Now will work on pushing to firebase.

  * worked a little on javascript firestore/firebase in db, it loads.
  * (added start coding mac file to open terminals and atom)
  * in order to use firestore functions from state, need to use const {firestore} = this.context.store, why i don't know ??? Also, there needs to be PropTypes and static contextTypes = {store: PropTypes.object.isRequired};
  * found a way to display first loaded trip uid, approx duration and time of departure 152817699257cf3eee095d26c520ff40a1a074d8 ([15281769](https://github.com/CoVoCre/CoVoBETA/commit/152817699257cf3eee095d26c520ff40a1a074d8))
  * fetching and displaying of firestore trips working in /TestPage/Tests/CoVoTrips.js ! ([0a45452a](https://github.com/CoVoCre/CoVoBETA/commit/0a45452a17342383ffeee8d55c43c8a9eb393d54))
  * trying to get trip push to work in AddTrip - it now displays
  * chose time is a string making possible to create a date and then call .getTime() to get timestamp in miliseconds, whereas firestore timestamp is just an object with .seconds and .miliseconds, so have to create time = new Date(.seconds\*1000) and then print date with just time
  * adding PushTripToFirestore component to verify info and push new trip info, or to return error message
  * need new logic for new trip and covo places, in order to identify groups and all. Added info to readme, will add component to choose a place. It must makes user search with text through google places, get the coordinates, calculate the covo place and put it in the state

* Working on AddTrip which should upload trip to cloud from Props

  * will work with [redux-firestore](https://github.com/CoVoCre/redux-firestore) and [react-redux-firebase](https://github.com/CoVoCre/react-redux-firebase), must add these to redux store creation process
  * added TestPage and also to router in order to render components in developpment there
  * mod redux state to include tripsInfo, added reducer and action
  * adding four fields to add trip, will want to add one as a date-time picker ([51411d77](https://github.com/CoVoCre/CoVoBETA/commit/51411d775dfe35d838acda603b88eb72792588a4))
    * working with material-ui-pickers for date-time stamp. Had to add date-fns@next ([b5ab46a2](b5ab46a20f04772ce2ffdd5716cea25838788bfe))

## :arrow_up: v0.0.2 Starting work on adding trip

## :arrow_down: v0.0.1 Finished work on adding redux state as state

* Added localstorage storing and loading of redux state upon each change.
  Had to reimplement some of signInLogicState update user state to only update the redux state's existing params, and not keep on adding and adding because the whole user was being merged. Also had to change to composeWithDevTools ([26ca821c](https://github.com/CoVoCre/CoVoBETA/commit/26ca821c10de4f959d5e71eccfeaec8cc8f00088))

* Updated SignInLogic to redux state, but removed the localstorage for now. Upon reload, user gets signed out. ([0e0fc16a](https://github.com/CoVoCre/CoVoBETA/commit/0e0fc16a0473bcf612cb9d5f12d8a7a6132c2cba))

* Updated LoginAndOtherDropdown to redux state ([7ea6f5dd](https://github.com/CoVoCre/CoVoBETA/commit/7ea6f5dd3a4f97681fba80181ab4c9fed89a79f9))

* Added redux-devtools-extension to inspect redux state in chrome with devtolls redux extension ([26931592](https://github.com/CoVoCre/CoVoBETA/commit/269315926b50fdb199967e17aa3292e051a81444))

Updated to react-places-autocomplete v7.0.1

## :arrow_up: v0.0.1 Started to work on adding redux state as state
