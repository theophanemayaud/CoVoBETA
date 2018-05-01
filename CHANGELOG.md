* Added localstorage storing and loading of redux state upon each change.
  Had to reimplement some of signInLogicState update user state to only update the redux state's existing params, and not keep on adding and adding because the whole user was being merged. Also had to change to composeWithDevTools ([](https://github.com/CoVoCre/CoVoBETA/commit/))

* Updated SignInLogic to redux state, but removed the localstorage for now. Upon reload, user gets signed out. ([0e0fc16a](https://github.com/CoVoCre/CoVoBETA/commit/0e0fc16a0473bcf612cb9d5f12d8a7a6132c2cba))

* Updated LoginAndOtherDropdown to redux state ([7ea6f5dd](https://github.com/CoVoCre/CoVoBETA/commit/7ea6f5dd3a4f97681fba80181ab4c9fed89a79f9))

* Added redux-devtools-extension to inspect redux state in chrome with devtolls redux extension ([26931592](https://github.com/CoVoCre/CoVoBETA/commit/269315926b50fdb199967e17aa3292e051a81444))

Updated to react-places-autocomplete v7.0.1
