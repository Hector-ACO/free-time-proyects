import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";

const changeStyle = makeStyles((theme) => ({
    Main: {
      background: "linear-grandient",
      height: "100vh",
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    Root: {
      background: "#FFF",
      with: "100%",
    },
    Left: {
      background: "#ee0000",
      width: "100%",
      height: "100%",
    },
    Right: {
      background: " #3200ee",
      width: "100%",
      height: "100%",
    },
    Logos: {
      height: "10%",
      width: "10%",
    },
    Menu: {
      width: "100vw",
    },
    MainMenu: {
      width: "12%",
    },
  }));
  export default changeStyle;