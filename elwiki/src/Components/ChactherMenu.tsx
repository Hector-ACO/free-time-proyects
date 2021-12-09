import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CharacterList } from "./CharacterList";
import { gridColumnsSelector } from "@mui/x-data-grid";
import { DowloadImage } from "./Image/DowloandImage";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeStyle from "../Css/HomeStyle";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export const ChactherMenu = () => {
  const classes = HomeStyle();
  const List = CharacterList();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {List.map((item) => {
            console.log(`lista de datos`, item.color);

            return (
              <Grid item xs={3}>
                <div style={{ backgroundColor: `${item.color}` }}>
                  <Box
                    display="flex"
                    flexDirection="row"
                    style={{ width: "100%" }}
                    alignItems="center"
                  >
                    <Accordion
                      style={{
                        background: `linear-gradient(to top, ${item.color},white`,
                        width: "100%",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Box
                          display="flex"
                          flexDirection="row"
                          style={{ width: "100%" }}
                          alignItems="center"
                        >
                          <DowloadImage name={item.icon[0].icon} width="50px" />
                          <div
                            className={classes.Title}
                            style={{ fontSize: "90%" }}
                          >
                            {item.name}
                          </div>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails style={{ backgroundColor: "white" }}>
                        {" "}
                        <Box
                          sx={{ flexGrow: 1 }}
                          style={{ backgroundColor: "white", width: "100%" }}
                        >
                          <Grid container spacing={0}>
                            <Grid item xs={3}>
                              <Item>
                                {item.classTree.map((item2) => (
                                  <Box display="flex" flexDirection="column">
                                    <ExpandMoreIcon />
                                    <DowloadImage name={item2.icon[0].icon} />
                                    <p>{item2.nameClass}</p>
                                  </Box>
                                ))}
                              </Item>
                            </Grid>
                            <Grid item xs={3}>
                              <Item>xs=4</Item>
                            </Grid>
                            <Grid item xs={3}>
                              <Item>xs=4</Item>
                            </Grid>
                            <Grid item xs={3}>
                              <Item>xs=8</Item>
                            </Grid>
                          </Grid>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
