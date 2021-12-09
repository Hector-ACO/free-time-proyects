import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const About = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>About</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            About this Page
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>
              {" "}
              Welcome to Elwiki, a multilingual database for the game Elsword,
              containing information from various servers. Elwiki specializes in
              North American and South Korean data, however all other data from
              other servers are welcome.
            </p>
            <br />
            <p>
              {" "}
              This wiki is currently maintained by anybody. Everyone is free to
              register and help contribute to the wiki to help build a complete
              database for Elsword. There are currently 18,952 articles in
              Elwiki.
            </p>
            <br />
            <p>
              Please read these rules before contributing to prevent any
              mistakes that could've been easily avoided
            </p>
            <br />
            <p>
              {" "}
              All rights are reserved (Official Art, Game Screenshots, etc.) to
              © KOG Studios, Nexon, Gameforge, and KOG Games (formerly known as
              Kill3rCombo)
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
