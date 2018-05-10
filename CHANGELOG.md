# Time of elements is from oldest at the bottom to newset at the top

## :arrow_down:

* Working on AddTrip which should upload trip to cloud from Props
  * will work with [redux-firestore](https://github.com/CoVoCre/redux-firestore) and [react-redux-firebase](https://github.com/CoVoCre/react-redux-firebase), must add these to redux store creation process
    * added TestPage and also to router in order to render components in developpment there
    * mod redux state to include tripsInfo, added reducer and action
    * adding four fields to add trip, will want to add one as a date-time picker ([51411d77](https://github.com/CoVoCre/CoVoBETA/commit/51411d775dfe35d838acda603b88eb72792588a4))

## :arrow_up: v0.0.2 Starting work on adding trip

## :arrow_down: v0.0.1 Finished work on adding redux state as state

* Added localstorage storing and loading of redux state upon each change.
  Had to reimplement some of signInLogicState update user state to only update the redux state's existing params, and not keep on adding and adding because the whole user was being merged. Also had to change to composeWithDevTools ([26ca821c](https://github.com/CoVoCre/CoVoBETA/commit/26ca821c10de4f959d5e71eccfeaec8cc8f00088))

* Updated SignInLogic to redux state, but removed the localstorage for now. Upon reload, user gets signed out. ([0e0fc16a](https://github.com/CoVoCre/CoVoBETA/commit/0e0fc16a0473bcf612cb9d5f12d8a7a6132c2cba))

* Updated LoginAndOtherDropdown to redux state ([7ea6f5dd](https://github.com/CoVoCre/CoVoBETA/commit/7ea6f5dd3a4f97681fba80181ab4c9fed89a79f9))

* Added redux-devtools-extension to inspect redux state in chrome with devtolls redux extension ([26931592](https://github.com/CoVoCre/CoVoBETA/commit/269315926b50fdb199967e17aa3292e051a81444))

Updated to react-places-autocomplete v7.0.1

## :arrow_up: v0.0.1 Started to work on adding redux state as state
