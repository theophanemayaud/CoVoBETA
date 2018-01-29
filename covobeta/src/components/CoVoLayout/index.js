import React, { Component } from "react";

import CoVoToolbarAndDrawer from "../CoVoToolbarAndDrawer/CoVoToolbarAndDrawer.js";
import Footer from "../Footer/Footer.js";

export function CoVoToolbar(props) {
  return (
    <header className="covo-toolbar">
      <CoVoToolbarAndDrawer />
      {props.children}
    </header>
  );
}
export function CoVoPageContent(props) {
  return <div className="covo-page-content">{props.children}</div>;
}
export function CoVoFooter(props) {
  return (
    <div className="covo-footer">
      <Footer />
    </div>
  );
}
