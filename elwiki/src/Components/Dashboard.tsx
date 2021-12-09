import React from "react";
import MainPageCss from "../Css/MainPageCss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Logo from "./Logo";
import PropTypes from "prop-types";
import { Navi } from "./Navi";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Route, Switch, Link } from "react-router-dom";
import { Main } from "./Info";
import { ListUpdates } from "./ListUpdates";
import { About } from "./About";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
//flex part

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export const Dashboard = () => {
  const classes = MainPageCss();
  return (
    <div className="App">
      <div className={classes.Main}>
        <div className={classes.Root}>
          {" "}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <Item>ElWiki</Item>
              </Grid>
              <Grid item xs={8}>
                <Item>Busqueda</Item>
              </Grid>
              <Grid item xs={2}>
                <Item>Log in</Item>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                  }}
                  style={{ backgroundColor: "#FFFFFF00" }}
                >
                  <Item style={{ backgroundColor: "#FFFFFF00" }}>
                    <Logo />
                    <div style={{ backgroundColor: "White" }}>
                      <About />
                    </div>
                    <div></div>
                  </Item>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: 1,
                    m: 1,
                    height: "65%",
                    backgroundColor: "red",
                    position: "relative",
                  }}
                  style={{ backgroundColor: "#FFFFFF00" }}
                >
                  <Item style={{ backgroundColor: "#FFFFFF00" }}>
                    <Accordion>
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Navegation</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <Navi />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Item>
                  <Item>Item 2</Item>

                  <Box
                    style={{
                      position: "absolute",
                      bottom: 0,
                    }}
                  >
                    <ListUpdates />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Item>
                  <Item>
                    <Item style={{ display: "flex", textAlign: "left" }}>
                      aqui va el nombew
                    </Item>
                    <Item>Barra de lenguaje</Item>
                  </Item>
                  <Item>
                    <Switch>
                      <Route exact path="/">
                        <Main />
                      </Route>
                      <Route exact path="/DashBoard/:name"></Route>
                    </Switch>
                  </Item>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item>xs=4</Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};
