import { useContext, useState } from "react";
import Header from "../components/Header/Header";
import { Box } from "@mui/material";
import Appcontext from "../data/appcontext";
const Report = () => {
  const { toggleColorMode, isSidebarCollapsed } = useContext(Appcontext);
  const [samplevalue, setSampleValue] = useState("one");
  return (
    <Box>
      <Header title="Reports" subtitle="List of reports available" />
      <h2>Sidebar value {isSidebarCollapsed ? "true" : "false"}</h2>
    </Box>
  );
};
export default Report;
