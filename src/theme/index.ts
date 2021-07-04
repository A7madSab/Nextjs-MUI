import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ea5a43",
      light: "#F7C0B7"
    },
    secondary: {
      main: "#1A90D2",
      light: "#A8D5EE"
    },
    text: {
      primary: "#171716",
      secondary: "#6b6b6b"
    },
    info: {
      dark: "#22272e",
      main: "#8e8e8e"
    },
    warning: {
      main: "#ECAB08"
    },
    success: {
      main: "#00966D",
      light: "#00BA88"
    },
    error: {
      main: "#C30052",
      light: "#ED2E7E"
    },
    action: {
      active: "#8e8e8e"
    }
  }
})

export default theme
