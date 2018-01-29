import React, { Component } from "react";

import CoVoToolbarAndDrawer from "../CoVoToolbarAndDrawer/CoVoToolbarAndDrawer.js";
import Footer from "../Footer/Footer.js";
import "./CoVoLayout.css";

export function CoVoToolbar(props) {
  return (
    <header id="covo-toolbar">
      <CoVoToolbarAndDrawer />
      {props.children}
    </header>
  );
}
export function CoVoPageContent(props) {
  return <div id="covo-page-content">{props.children}</div>;
}
export function CoVoFooter(props) {
  return (
    <div id="covo-footer">
      <Footer />
    </div>
  );
}
