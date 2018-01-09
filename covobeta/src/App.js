import React, { Component } from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar.js";
import Footer from "./components/Footer/Footer.js";
import logo from "./logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <main>
          <p className="App-intro">
            Yes, this website exists but it is not yet ready !!! We are busy
            making it great, so it can help everyone out there who needs to go
            about freely. Well, but of course, who needs this, really ?
          </p>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
