import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { withStyles } from "material-ui/styles";
import lightBlue from "material-ui/colors/lightBlue";
import pink from "material-ui/colors/pink";
import red from "material-ui/colors/red";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Footer from "./components/Footer/Footer.js";
import "./App.css";

{
  /*import HeaderBar from "./components/HeaderBar/HeaderBar.js";*/
}
const covoTheme = createMuiTheme({
  palette: {
    primary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[700]
    },
    secondary: {
      light: pink.A200,
      main: pink.A400,
      dark: pink.A700
    },
    error: {
      main: red[500]
    }
  }
});
const styles = {
  root: {
    flex: 1
  }
};
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={covoTheme}>
        {/*        <HeaderBar />*/}
        <AppBar position="static">
          <Toolbar classes={styles.root}>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit">
              CoVo
            </Typography>
            <Button color="contrast">Login</Button>
          </Toolbar>
        </AppBar>

        {/* Adjust top margin for fixed toolbar */}
        <p>
          Yes, this website exists but it is not yet ready !!! We are busy
          making it great, so it can help everyone out there who needs to go
          about freely. Well, but of course, who needs this, really ?
        </p>

        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
