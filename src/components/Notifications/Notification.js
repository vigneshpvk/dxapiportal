import {
  Box,
  IconButton,
  InputBase,
  TextField,
  useTheme,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Popover from "@mui/material/Popover";
import { Fragment, useState } from "react";

const Notification = () => {
  //   Notification bell handling
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <span>
      <IconButton size="medium" onClick={handleClick}>
        <Badge badgeContent={4} color="success">
          <NotificationsIcon fontSize="medium" />
        </Badge>
      </IconButton>
      {/* Show notification content on click */}
      <Popover
        //   id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List sx={{ maxWidth: 360 }}>
          <ListItem>
            <ListItemText
              primary="Report added"
              secondary="Loan approval report has been added . Please view it in report"
            />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText
              primary="LR-45321 approved"
              secondary="Your loan request case LR-45321 has been approved by Vignesh- nodal officer . please open case to proceed further "
            />
          </ListItem>
        </List>
      </Popover>
    </span>
  );
};
export default Notification;
