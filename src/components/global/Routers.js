import Mywork from "../../pages/Mywork";
import Report from "../../pages/Report";
import Profile from "../../pages/Profile";
import Dashboard from "../../pages/Dashboard";
import Team from "../../pages/team";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/mywork" element={<Mywork />} />
      <Route path="/report" element={<Report />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};

export default Routers;
