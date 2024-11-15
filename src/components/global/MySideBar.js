import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { IconButton, Box, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import pegalogo from "../../images/pegalogo.png";
import WorkIcon from "@mui/icons-material/Work";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddchartIcon from "@mui/icons-material/Addchart";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { ColorModeContext, useMode, tokens } from "../../themes";
import { Link } from "react-router-dom";
import "./global.css";
import Appcontext from "../../data/appcontext";
import { useContext } from "react";

const MySideBar = ({ onSidebarChange }) => {
  // Defining colors from theme
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { isSidebarCollapsed } = useContext(Appcontext);

  // const [isCollapsed, setIsCollapsed] = useState(false);

  const collapseMenuButton = () => {
    onSidebarChange(!isSidebarCollapsed);
  };
  return (
    <Sidebar collapsed={isSidebarCollapsed}>
      <Menu
        menuItemStyles={{
          button: ({}) => {
            // only apply styles on first level elements of the tree
            return {
              backgroundColor: colors.primary[400],
              [`&:hover`]: {
                backgroundColor: colors.greenAccent[500],
              },
            };
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          bgcolor={colors.primary[400]}
          height="100vh"
        >
          <Box display="flex">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
            >
              {!isSidebarCollapsed && (
                <Box>
                  <img src={pegalogo} width="150px" height="30px" />
                </Box>
              )}
              <Box ml={2.5}>
                <IconButton onClick={collapseMenuButton}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box>
            <SubMenu label="Create Case" icon={<WorkIcon />}>
              <MenuItem>Loan Request </MenuItem>
              <MenuItem>Loan Verification</MenuItem>
            </SubMenu>
          </Box>
          <Box>
            <MenuItem
              icon={<DashboardCustomizeIcon />}
              component={<Link to="/" />}
            >
              Dashboard
            </MenuItem>
          </Box>
          <Box>
            <MenuItem
              icon={<AssignmentIcon />}
              component={<Link to="/mywork" />}
            >
              My Work
            </MenuItem>
          </Box>
          <Box flexGrow="1">
            <MenuItem icon={<AddchartIcon />} component={<Link to="/report" />}>
              Report{" "}
            </MenuItem>
          </Box>
          <Box>
            <MenuItem icon={<LogoutIcon />}> Log out </MenuItem>
          </Box>
        </Box>
      </Menu>
    </Sidebar>
  );
};

export default MySideBar;
