import React from "react";
import './Dashboard.css';
import MainDash from './MainDash/MainDash';
import RightSide from './RigtSide/RightSide';
import SidebarStudent from './SidebarStudent';
import { useLocation } from "react-router-dom"; // Import useLocation

const Dashboard = () => {
  const location = useLocation();
  const userData = location.state?.user; // Get the user data from the state, if available

  return (
    <div className="Dash-body">
      <div className="Dash-content">
        <SidebarStudent userData={userData} /> {/* Pass the user data to the SidebarStudent component */}
        <MainDash userData={userData} />
        <RightSide />
      </div>
    </div>
  );
};

export default Dashboard;

