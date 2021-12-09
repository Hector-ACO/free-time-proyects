import { makeStyles } from "@mui/styles";
import { height, textAlign } from "@mui/system";

const HomeStyle = makeStyles((theme) => ({
  Title: {
    textAlign: "center",
    fontFamily: "Arial Black",
    fontWeight: "bold",
    fontSize: "30px",
    color: "#fff",
    textShadow: "1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000",
  },
  Text: {
    textAlign: "left",
    fontFamily: "Arial Black",
    fontWeight: "bold",
    fontSize: "2x",
    color: "#fff",
    textShadow: "1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000",
    display: "flex",
  },
}));
export default HomeStyle;
