import React, { useState, useEffect } from "react";
import "./SidebarStudent.css";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const SidebarStudent = ({ userData }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location object
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  };

  useEffect(() => {
    // Find the index of the active menu item based on the current path
    const activeIndex = SidebarData.findIndex(item => location.pathname.includes(item.heading));
    setSelected(activeIndex >= 0 ? activeIndex : 0); // Set the selected index
  }, [location.pathname]);

  console.log(window.innerWidth);

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="logo">
          <img src={`http://localhost:8000/uploads/${userData.image}`} alt="logo" />
          <span>
            Welcome
            <p>{userData ? userData.name : "Guest"}</p>
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={
                  selected === index ? 'menuItem active' : 'menuItem'
                }
                key={index}
                onClick={() => {
                  setSelected(index);
                  navigate('/StudentDashboard/' + item.heading, { state: { user: userData } });
                }}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>

            );
          })}

          <div className="menuItem" onClick={() => navigate('/onlinefacility')}>
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SidebarStudent;
