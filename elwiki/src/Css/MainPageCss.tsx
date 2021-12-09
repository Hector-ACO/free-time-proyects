import { makeStyles } from "@mui/styles";
import Bg from "../Image/Bg.png";


const MainPageCss = makeStyles((theme) => ({
Main:{
    background:"linear-grandient",
    height: "100vh",
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${Bg})`,
    position: "fixed",
},
Root: {
    height: "100%",
    width: "100%",

    overflowY: "auto",
  },
  Head: {
    height: "15%",
    width: "100%",
    backgroundColor: "blue",
  },
  Body: {
    height: "85%",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "black",
  },
  Left: {
    backgroundColor: "yellow",
  },
}));
export default MainPageCss;