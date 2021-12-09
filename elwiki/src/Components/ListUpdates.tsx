import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
/**grid */
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

/*Modal*/

import { KrUpdate } from "./Updates";
import { NaUpdate } from "./Updates";
import { EuUpdate } from "./Updates";
/**/
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
/**/

export const ListUpdates = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  /**/
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  /** */
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const abrir = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <NotificationsActiveIcon />
        Updates
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={abrir}
        onClose={handClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Button onClick={handleOpen}></Button>
        <Button onClick={handleOpen2}>Server Update (fixed please)</Button>
      </Menu>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            <MenuItem onClick={handleClose}>Close</MenuItem>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            <Box sx={{ width: "100%", height: "50%" }}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Item style={{ fontSize: 10 }}>
                    <KrUpdate />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item style={{ fontSize: 10 }}>
                    <NaUpdate />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item style={{ fontSize: 5, overflowY: "auto" }}>
                    <EuUpdate />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <MenuItem onClick={handleClose2}>Close</MenuItem>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
