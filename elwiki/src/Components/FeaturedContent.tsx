import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  FirstVideo,
  SecondoVideo,
  TerzoVideo,
  QuartoVideo,
} from "./Video/video";
function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const FeaturedContent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Aisha 4th Path" {...a11yProps(0)} />
          <Tab label="Aisha 3th Path " {...a11yProps(1)} />
          <Tab label="Aisha 2do Path" {...a11yProps(2)} />
          <Tab label="Aisha 1st Path" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FirstVideo />
        Elsword KR: Aisha 4th path
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SecondoVideo />
        Aisha 3 line story movie: The strongest magical girl in the universe
        appears!
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TerzoVideo />
        Aisha 2-line story movie: the pinnacle of true black magic
      </TabPanel>
      <TabPanel value={value} index={3}>
        <QuartoVideo />
        Aisha Line 1 Story Movie: A Sage Who Awakens the Extreme of Elemental
        Art, 'Ether'
      </TabPanel>
    </Box>
  );
};
