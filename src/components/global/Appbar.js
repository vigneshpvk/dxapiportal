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
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import Popover from "@mui/material/Popover";
import { useMode, tokens } from "../../themes";
import { useContext, useState } from "react";
import Notification from "../Notifications/Notification";
import pegalogo from "../../images/pegalogo.png";
import Profile from "../Profile/Profile";

import Appcontext from "../../data/appcontext";

const Appbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useContext(Appcontext);

  return (
    <Box display="flex" justifyContent="space-between">
      {/* LOGO DISPLAY */}

      {/* APPLICATION NAME DISPLAY */}
      {/* <Box ml={10} mt={0.3} sx={{ fontSize: "20px", fontWeight: "bold" }}>
          Loan Application
        </Box> */}

      {/* SEARCH BAR */}
      <Box></Box>
      <Box
        border="1px solid skyblue"
        borderRadius={5}
        mt={1}
        height="30px"
        backgroundColor={colors.primary[400]}
      >
        <form>
          <IconButton>
            <SearchOutlinedIcon fontSize="small" />
          </IconButton>
          <InputBase placeholder="search" sx={{ width: "150px" }} />
        </form>
      </Box>

      {/* RIGHT SIDE ICONS */}
      <Box mt={1} backgroundColor={colors.primary[400]}>
        <IconButton onClick={toggleColorMode} size="medium">
          {theme.palette.mode === "dark" ? (
            <Brightness4Icon fontSize="medium" />
          ) : (
            <LightModeIcon fontSize="medium" />
          )}
        </IconButton>
        <Notification />
        <Profile />
      </Box>
    </Box>
  );
};

export default Appbar;
