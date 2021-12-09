import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ListOfContentUpdates = () => {
  return (
    <div id="logDes" style={{ backgroundColor: "gray" }}>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Item>
              <Box>
                <Grid container spacing={0}>
                  {" "}
                  <Item
                    style={{
                      textAlign: "left",
                      width: "100vw",
                      backgroundColor: "#cdd0d9",
                    }}
                  >
                    Patch Dates
                  </Item>
                </Grid>
              </Box>
              <Box>
                {" "}
                <Grid container spacing={0}>
                  <Grid item xs={6}>
                    <Item style={{ textAlign: "justify", height: "50px" }}>
                      South Korea
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item style={{ textAlign: "justify", height: "50px" }}>
                      North America{" "}
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "justify", height: "100px" }}>
              {" "}
              Content
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "justify", height: "100px" }}>
              External Links
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              September 10, 2020
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              October 07, 2020
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              Event: Harmony Festival
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "justify", height: "100px" }}>
              KOG Games
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              December 17, 2020
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              January 13, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px", fontSize: 12 }}>
              New Character: Noah New Class: Second Revenger, Silent Shadow,
              Liberator
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              KOG Games
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              January 14, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              February 10, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              New Class: Second Selection, Stellar Caster, Celestia
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              KOG Games
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              February 10, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              March 10, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              New Class: Second Grief, Pale Pilgrim, Nyx Pieta
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              KOG Games
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              April 29, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              May 26, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              Profession System Revamp
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              KOG Games
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              July 08, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              August 4, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px", fontSize: 11 }}>
              New Class: Root Knight, Sacred Templar, and Genesis Early Region
              Progression Revamp
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>Nexon</Item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              July 22, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              August 18, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px", fontSize: 12 }}>
              New Region: Pruinaum Outskirts New Dungeon: Plegas's Gaze &
              Plegas's Reflection
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              KOG Games
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              August 19, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              September 15, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              New Giant Boss: Plegas's Labyrinth
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              KOG Games
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              September 02, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              September 29, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px", fontSize: 12 }}>
              New Class: Code: Unknown, Code: Failess, and Code: Antithese
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>Nexon</Item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              November 11, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}>
              December 08, 2021
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px", fontSize: 12 }}>
              New Class: Wiz Magician, Mystic Alchemist, and Lord Azoth
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item style={{ textAlign: "left", height: "100px" }}></Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
