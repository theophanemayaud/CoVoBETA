import { MuiThemeProvider, createMuiTheme } from "material-ui";

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#1db6e7"
      }
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: "#gggggg",
        color: "white"
      }
    },

    MuiPickersDay: {
      day: {
        color: "#1db6e7"
      },
      selected: {
        backgroundColor: "#ffffff"
      },
      current: {
        color: "#fe70c4"
      }
    },
    MuiPickersModal: {
      dialogAction: {
        "& > button": {
          color: "#fe70c4"
        }
      }
    }
  }
});
export default materialTheme;
