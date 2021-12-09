import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Log from "./Logo";
import HomeStyle from "../Css/HomeStyle";
import { KrUpdate } from "./Updates";
import { NaUpdate } from "./Updates";
import { EuUpdate } from "./Updates";
import { GeneralGuides } from "./General Guides";
import { ListOfContentUpdates } from "./ListOfContentUpdates";
import { FeaturedContent } from "./FeaturedContent";
import { HowYouCanHelp } from "./HowYouCanHelp";
import { CharacterList } from "./CharacterList";
import { ChactherMenu } from "./ChactherMenu";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Main = () => {
  const classes = HomeStyle();
  return (
    <div>
      <div id="logDes" style={{ backgroundColor: "gray" }}>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item></Item>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Box>
      </div>

      <div id="list conten and feacture contenued">
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <Accordion style={{ backgroundColor: "#bddde8" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ textAlign: "center" }}
                  >
                    <Typography className={classes.Title}>
                      List Of Content Updates
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Box sx={{ width: "100%" }}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Item>
                              <ListOfContentUpdates />
                            </Item>
                          </Grid>
                        </Grid>
                      </Box>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <FeaturedContent />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div id=" how can help">
        <Accordion style={{ backgroundColor: "#bddde8" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ textAlign: "left" }}
          >
            <Typography className={classes.Title}>How you can help!</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Box sx={{ width: "100%" }}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Item>
                      <HowYouCanHelp />
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div id="chactermenu">
        <Accordion style={{ backgroundColor: "#bddde8", textAlign: "center" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ textAlign: "left" }}
          >
            <Typography className={classes.Title}>Characters</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Box sx={{ width: "100%" }}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Item>
                      <ChactherMenu />
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
