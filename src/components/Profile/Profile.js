import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import LogoutIcon from "@mui/icons-material/Logout";
import AppsIcon from "@mui/icons-material/Apps";
import Popover from "@mui/material/Popover";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [openSwitchApps, setOpenSwitchApps] = useState(true);

  //   Profile  handling
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
        <AccountCircleIcon fontSize="medium" />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List>
          <ListItemButton component={Link} to="/profile">
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary="My profile" />
          </ListItemButton>
          {/* SWITCH APPS */}
          <ListItemButton onClick={() => setOpenSwitchApps(!openSwitchApps)}>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="Switch Apps" />
            {openSwitchApps ? <ExpandMore /> : <ExpandLess />}
          </ListItemButton>
          <Collapse in={!openSwitchApps}>
            <List>
              <ListItemButton>
                <ListItemText
                  primary="KYC Processing"
                  sx={{ textAlign: "right" }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText
                  primary="Fraud Detection"
                  sx={{ textAlign: "right" }}
                />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItemButton>
        </List>
      </Popover>
    </span>
  );
};

export default Profile;
