#### 0.1.1 (2019-01-26)

##### Chores

* **organisation:** Fixed gitignore syntax ([3a22bfaa](https://github.com/CoVoCre/CoVoBETA/commit/3a22bfaa80f57062d0b5336e8c0d60c8b2de9fbd))
* **update dependency:**  geofirestore ([40397e26](https://github.com/CoVoCre/CoVoBETA/commit/40397e26d3120573ee4e5ceff1c543312506f22b))
* **Git:**
  *  added src/*.css to gitignore ([2a6c4611](https://github.com/CoVoCre/CoVoBETA/commit/2a6c461151a2ed4a67698ecc97c9268ab239d8a1))
  *  removed more tracked files that shouldn't have been tracked ([ee3814df](https://github.com/CoVoCre/CoVoBETA/commit/ee3814df1826d3e09ea8db92f223e398cf03caae))
  *  untracked files that had become erroneously tracked ([2ee7d2c3](https://github.com/CoVoCre/CoVoBETA/commit/2ee7d2c31e015d80b4c3e3af40f4eaf807b8e148))
* **tests:**  added lots of low level tests ([108c8c34](https://github.com/CoVoCre/CoVoBETA/commit/108c8c34cdaf28b528be8d084ec0581af926c5c8))
* **Files:**
  *  update command file to start in right dir ([5230da3b](https://github.com/CoVoCre/CoVoBETA/commit/5230da3bb8c0ab0e939525cd8f4200c4d12f18e7))
  *  deleted old location ([f1587683](https://github.com/CoVoCre/CoVoBETA/commit/f15876830830cf5af5bd302758dbf064071cfcec))
  *  moved files to root of CoVoBETA ([d818e718](https://github.com/CoVoCre/CoVoBETA/commit/d818e7182ed8c7b7f227b5e6abe133224e76bd97))
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

##### Documentation Changes

* **organisation:**  moved wiki and todo project to readme ([2cae55fd](https://github.com/CoVoCre/CoVoBETA/commit/2cae55fd3c561d730699011056f501a997807f3f))

##### New Features

* **unknown:**  did some things apparently but do not remeber what... ! ([08000c4c](https://github.com/CoVoCre/CoVoBETA/commit/08000c4c2443ba5fd54a9813af5cd629545a6191))
* **Maps API:**  retry loading every 3 secs ([49f6bb7f](https://github.com/CoVoCre/CoVoBETA/commit/49f6bb7f7c197d6a29fba34193ca7d7ed2df5931))
* **Development tools:**   added eslint as eslint-config-react-app from https://www.npmjs.com/package/eslint-config-react-app ([7b20f069](https://github.com/CoVoCre/CoVoBETA/commit/7b20f06919ec424a2f554ce424d5ad4ac7aeef86))
* **Tests/GetFromFirestore.js:**  now working, redux-firestore listeners ([16925c3a](https://github.com/CoVoCre/CoVoBETA/commit/16925c3ae8b48ae33d4c185b1c96a35f74c2490a))

##### Bug Fixes

* **tools:**
  *  CircleCI config updated to invalidate cache and node v8.11.3 ([4e595b6b](https://github.com/CoVoCre/CoVoBETA/commit/4e595b6b6fc60d0641bf06d981c98096e78ba502))
  *  update circleci config for new root organisation ([afdd2ba7](https://github.com/CoVoCre/CoVoBETA/commit/afdd2ba7844259d6c70cce9bac534b992f485ca8))
* **Router:**
  *  test with firebase config rewrite and BrowserRouter ([d6e9a787](https://github.com/CoVoCre/CoVoBETA/commit/d6e9a7877bb47b9efec0bee3b7c0f9ea0b228afd))
  *  use HashRouter to test for static server ([542a1687](https://github.com/CoVoCre/CoVoBETA/commit/542a16870c5d298bd68c9454cf26364c7cf96bf5))
* **redirect:**  removed redirect because of loop ([80d89435](https://github.com/CoVoCre/CoVoBETA/commit/80d894356339e418243268a3299bc7d31901a9ab))
* **CoVoPlaceChooser:**  moved maps api script to head ([b2fcd6fb](https://github.com/CoVoCre/CoVoBETA/commit/b2fcd6fbf4ce8b97c1d44e2787d0f400c5ceb544))
* **eslint:**  switch case indentation normalised ([e77b7a87](https://github.com/CoVoCre/CoVoBETA/commit/e77b7a875bc55767c5518972ce7ac2f49298df47))
* **PlacesAutocomplete:**   declared callback func before api load ([8514193f](https://github.com/CoVoCre/CoVoBETA/commit/8514193f46a89a5e31194b3375f80b24791aba85))
* **Gmaps:**  before react-places-autocomplete update to enable async ([6353fa98](https://github.com/CoVoCre/CoVoBETA/commit/6353fa98cff716d6b84a7cb561dfb4812bdcd8cf))

##### Other Changes

* **git:**  fixed timestamp previously tracked but should be ignored ([919c4026](https://github.com/CoVoCre/CoVoBETA/commit/919c40267bf5d9f246c430a5b6f279c954249023))
* **tools:**  added generate-changelog to dev dependencies and added scripts to use it in package.json ([0513d373](https://github.com/CoVoCre/CoVoBETA/commit/0513d3735ba46f832811178d56ba82f2719398a0))
* **refactor:**  small changes ([81c6089c](https://github.com/CoVoCre/CoVoBETA/commit/81c6089cbffe73e58890cd3222da015a80420155))

##### Refactors

* **store:**  moved store creation and firebase init to files ([30e2850d](https://github.com/CoVoCre/CoVoBETA/commit/30e2850d2149c9f2b251d72b2581fa9dee169c58))

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

