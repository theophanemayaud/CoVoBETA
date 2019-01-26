# CoVoBETA

[![CircleCI](https://circleci.com/gh/CoVoCre/CoVoBETA/tree/master.svg?style=svg)](https://circleci.com/gh/CoVoCre/CoVoBETA/tree/master)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you'll find some useful info, mostly for myself at first.

## Table of Contents

- [Firestore stuff](#firestore-stuff)
  - [Timestamp](#timestamp)
  - [Places](#places)
  - [Trips](#trips)
- [Images in react](#images-in-react)
- [Router component for react](#router-component-for-react)
- [Code snippets](#code-snippets)
  - [Template component](#template-component)
  - [Reference commit in .md](#commit-md)
- [Redux in CoVo](#redux-in-covo)
- [Changelog for CoVoBETA](#changelog-for-covobeta)

## Firestore stuff

### Timestamp

The firestore timestamp is just and object with .seconds and .miliseconds properties, so in order to use as a date, need to create new Date(timestamp.seconds\*1000) and then use that new date.

### Places

CoVo will have a firestore collection with all places used, sorted by geolocation.
There will be small squares, and places will be grouped if they are within the same square. There are then collections for each squares of sub places, with descriptions, photos of the meeting point.
Thus, with google maps we can get the location of the place, and identify the correct CoVo square. Then make the user select an existing meeting place or create a new one.
Covo places will be 10mx10m squares at the equator. There are 360deg for ~40 000 000 m or 0.00009degree per 10m at the equator. Round that to 0.0001 deg making 11.1111m at the equator.
Gocoordinates are +90 (north) -90 south, +180 (east) -180 (west), there will be from 0 to +90 : 90/.0001=900 000 covo places north and south, times 180/.0001=1 800 000 east and west.
Upon getting degree coordinates from google, do a **divide by 0.0001 round down with Math.floor(number)**, and there you have it. For neg num though, floor will bring it down as well -2.2->-3

```
covo_latitudes (from -900 000:southpole to +900 000:northpole)
  covo_longitudes (from -1 800 000:west to +1 800 000:east)
    covo_rdv_points (auto id)
      gmaps_id (optional text)
      rdv_name (optional text for the first rdv point at least)
      rdv_description (optional text for the first rdv point at least)
      rdv_adress (text, optional for the first rdv point at least)
```

### trips

Trips will contain info on the trips and link to drivers - passengers - arrival - destination - and waypoints places

```
covo_trips (with auto ids)
  departure_timestamp (timestamp)
  approx_duration (decimal number)
  covo_waypoints: {
    dep: { text: "", covo_lat: null, covo_long: null, covo_rdv_id // rdvGmapsId for now : "" },
    arrival: { text: "", covo_lat: null, covo_long: null, covo_rdv_id // rdvGmapsId for now : "" }
  }, (in order of passing through)
  pay {currency: , trip_parts: { complete_journey: null, (dep_covo_rdv_id_arrival_covo_rdv_id): null }}
  riders {riderUID1:{rider_type: ,
                    dep {covo_lat:, covo_long:, covo_rdv_id},
                    arrival: {covo_lat:, covo_long:, covo_rdv_id}},
          riderUID2:{rider_type: ,
                    dep {covo_lat:, covo_long:, covo_rdv_id},
                    arrival: {covo_lat:, covo_long:, covo_rdv_id}},
          riderUID3...}

covo_lat (collec id from -1800000 to 1800000)
  covo_long (collec id from -900000 to 900000)
    covo_rdvs (collec automatic id)
      covo_rdv_id (doc auto id)
```

## Images in react

Either require first like `import logo from "./../../logo.png";'`
Or also just do like `src={"images/logo.png"}` so just the brackets.
[Note] : by default the root will be static, unless ./ used to explicitly reference the file's personal root.

## Router component for react

Package react-router-dom
Available components :

```js
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
```

There is the command for path (not required), specify exact if "/", and either render={() => <div>Rendered div</div>} or component={ComponentName}
[Example with render and root path exact] : <Route path="/" exact render={() => <div>Home</div>} />
[Example with component and all paths] :<Route component={NoMatch} />
[Note] : Implement through Switch component of react-router-dom

## Code snippets

Here are some code samples to copy and paste in order to save time re thinking the structure !

### Template component

```js
import React, { Component } from "react";

//Installed dependencies imports
//import PropTypes from "prop-types";
//import { connect } from "react-redux";

//CoVo javascript imports

//Content imports
import "./EmptyComponent.css";

//Temporary or unclassified imports

//Descriptions of props, what it does, and what it affects
/*General description :
 * Props :
 ** ...(props and descriptions)
 * Needs to read from store :
 * Store actions needed :
 * Affects
 ** return: ...
 ** ...
 **/
//Beginning of implementation
class EmptyComponent extends Component {
  //static contextTypes = {
  //  store: PropTypes.object.isRequired
  //};
  render() {
    return <div className="empty-component">In EmptyComponent</div>;
  }
}

/*const mapStateToProps = state => ({
  exampleProp: state.exampleStatePart
});

const mapDispatchToProps = dispatch => {
  return {
    examplePropFunction: () => {
      dispatch(exampleStoreAction(false));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmptyComponent);*/
export default EmptyComponent;
```

### Reference commit in .md

```txt
([26931592](https://github.com/CoVoCre/CoVoBETA/commit/269315926b50fdb199967e17aa3292e051a81444))
```

devient
([26931592](https://github.com/CoVoCre/CoVoBETA/commit/269315926b50fdb199967e17aa3292e051a81444))

## Redux in CoVo

Based on https://redux.js.org/introduction/examples#todos-with-undo

## Changelog for CoVoBETA

This project uses [generate-changelog](https://www.npmjs.com/package/generate-changelog) to manage versions and changes. Use the syntax type(category):comments
Available types : breaking, build, ci, chore, docs, feat, fix, other, perf, refactor, revert, style, test
CoVo categories : see below
See [generate-changelog/useage](https://www.npmjs.com/package/generate-changelog#usage) for general guidelines.

### Predefined types, use if one fits :

#### Concerning dependencies, generally chore

- dependencies updates : chore(update dependency)
- adding dependencies : chore(added dependency)
- removing dependencies : chore(removed dependecy)

#### Concerning general/small code changes

- no exact point, objective : refactor(|file name|component name|fonction name|)
- fixing a small issue : fix(|file name|component name|fonction name|)
