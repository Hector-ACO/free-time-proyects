import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DifferenceIcon from "@mui/icons-material/Difference";
import HomeIcon from "@mui/icons-material/Home";
import CachedIcon from "@mui/icons-material/Cached";
import RuleIcon from "@mui/icons-material/Rule";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Navi = () => {
  const history = useHistory();
  const changePage = (path: string) => {
    history.push(path);
    <Link to={path} />;
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => changePage("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CachedIcon />
              </ListItemIcon>
              <ListItemText primary="Recent Changes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DifferenceIcon />
              </ListItemIcon>
              <ListItemText primary="Server Differences" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RuleIcon />
              </ListItemIcon>
              <ListItemText primary="Editing Rules" />
            </ListItemButton>
          </ListItem>{" "}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HelpCenterIcon />
              </ListItemIcon>
              <ListItemText primary="Babel" />
            </ListItemButton>
          </ListItem>{" "}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Sig  Maker" />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </nav>
      <Divider />
    </Box>
  );
};
