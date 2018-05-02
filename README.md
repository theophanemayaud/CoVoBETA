# CoVoBETA

[![CircleCI](https://circleci.com/gh/CoVoCre/CoVoBETA/tree/master.svg?style=svg)](https://circleci.com/gh/CoVoCre/CoVoBETA/tree/master)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you'll find some useful info, mostly for myself at first.

## Table of Contents

* [Images in react](#images-in-react)
* [Router component for react](#router-component-for-react)
* [Code snippets](#code-snippets)
  * [Template component](#template-component)
  * [Reference commit in .md](#commit-md)
* [Redux in CoVo](#redux-in-covo)

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

//CoVo javascript imports

//Content imports
import "./EmptyComponent.css";

//Temporary or unclassified imports

//Descriptions of props, what it does, and what it affects
//Beginning of implementation
class EmptyComponent extends Component {
  render() {
    return <div className="empty-component">Empty data</div>;
  }
}

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
