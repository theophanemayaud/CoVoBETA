### 0.1.0 (2018-07-26)

##### Chores

* **added dependency:**  geofirestore to use for real time geo queries ([53930ce3](https://github.com/CoVoCre/CoVoBETA/commit/53930ce3b95ca35ea9350d90439436673c03a527))
* **Tests:**  added routes for multiple components in tests ([1fa54308](https://github.com/CoVoCre/CoVoBETA/commit/1fa54308d1fc2fcea8abb5b10a1a3f55b1c5aab6))
* **dependencies:**
  *  added @firebase/app-types back as dev dep to fix false positive warnings ([53841c54](https://github.com/CoVoCre/CoVoBETA/commit/53841c54b85cff0b2db655212e067914ebb1feea))
  *  node-sass-chokidar moved to dev dependencies ([ca0610d5](https://github.com/CoVoCre/CoVoBETA/commit/ca0610d5355e67062a6f746e5a8cf73f1a9fdc61))
  *  npm-run-all moved to dev dependencies ([56a7b54e](https://github.com/CoVoCre/CoVoBETA/commit/56a7b54eeaed007b5006dbcc9831ec5283c97e36))
* **update:**
  *  updated redux-localstorage-simple ([c7ba0a92](https://github.com/CoVoCre/CoVoBETA/commit/c7ba0a923efdd9305f5ef7e37206349e6eb3b9fb))
  *  updated react-router-dom ([657bf906](https://github.com/CoVoCre/CoVoBETA/commit/657bf906db73e8f6a039957ae5dac721ade7145a))
  *  react-dom update ([5911fd12](https://github.com/CoVoCre/CoVoBETA/commit/5911fd12f10b2ab94327164983d4d502aecaf57b))
  *  removed @firebase/app-types and updated typeface-roboto ([7146be4a](https://github.com/CoVoCre/CoVoBETA/commit/7146be4aa4271c48fcdb1e6fd0b23a28cb735f0c))

##### New Features

* **Maps API:**  retry loading every 3 secs ([49f6bb7f](https://github.com/CoVoCre/CoVoBETA/commit/49f6bb7f7c197d6a29fba34193ca7d7ed2df5931))
* **Development tools:**   added eslint as eslint-config-react-app from https://www.npmjs.com/package/eslint-config-react-app ([7b20f069](https://github.com/CoVoCre/CoVoBETA/commit/7b20f06919ec424a2f554ce424d5ad4ac7aeef86))
* **Tests/GetFromFirestore.js:**  now working, redux-firestore listeners ([16925c3a](https://github.com/CoVoCre/CoVoBETA/commit/16925c3ae8b48ae33d4c185b1c96a35f74c2490a))

##### Bug Fixes

* **CoVoPlaceChooser:**  moved maps api script to head ([b2fcd6fb](https://github.com/CoVoCre/CoVoBETA/commit/b2fcd6fbf4ce8b97c1d44e2787d0f400c5ceb544))
* **eslint:**  switch case indentation normalised ([e77b7a87](https://github.com/CoVoCre/CoVoBETA/commit/e77b7a875bc55767c5518972ce7ac2f49298df47))
* **PlacesAutocomplete:**   declared callback func before api load ([8514193f](https://github.com/CoVoCre/CoVoBETA/commit/8514193f46a89a5e31194b3375f80b24791aba85))
* **Gmaps:**  before react-places-autocomplete update to enable async ([6353fa98](https://github.com/CoVoCre/CoVoBETA/commit/6353fa98cff716d6b84a7cb561dfb4812bdcd8cf))

##### Other Changes

* **tools:**  added generate-changelog to dev dependencies and added scripts to use it in package.json ([0513d373](https://github.com/CoVoCre/CoVoBETA/commit/0513d3735ba46f832811178d56ba82f2719398a0))
* **refactor:**  small changes ([81c6089c](https://github.com/CoVoCre/CoVoBETA/commit/81c6089cbffe73e58890cd3222da015a80420155))

##### Refactors

* **store:**  moved store creation and firebase init to files ([30e2850d](https://github.com/CoVoCre/CoVoBETA/commit/30e2850d2149c9f2b251d72b2581fa9dee169c58))

