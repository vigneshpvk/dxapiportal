import "./App.css";
import { useMode, tokens } from "./themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Appbar from "./components/global/Appbar";
import MySideBar from "./components/global/MySideBar";
import Routers from "./components/global/Routers";
import { BrowserRouter } from "react-router-dom";
import Appcontext from "./data/appcontext";
import Dashboard from "./pages/Dashboard";
import { useEffect, useMemo, useState } from "react";

function App() {
  const [theme, toggleColorMode] = useMode();

  // sidebar function
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mainContentMargin, setMainContentMargin] = useState("20.5vw");

  // change sidebar

  const handleSidebarChange = (sidebarValue) => {
    setIsSidebarCollapsed(sidebarValue);
    setMainContentMargin(sidebarValue ? "8vw" : "20.5vw");
  };

  const contextvalue = { toggleColorMode, isSidebarCollapsed };
  return (
    <Appcontext.Provider value={contextvalue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="app">
            <div className="my-sidebar">
              <MySideBar onSidebarChange={handleSidebarChange} />
            </div>
            <main className="content" style={{ marginLeft: mainContentMargin }}>
              <Appbar />
              <Routers />
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Appcontext.Provider>
  );
}

export default App;
