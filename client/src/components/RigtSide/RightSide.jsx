import React from "react";

import Updates from "../Updates/Updates";
import "./RightSide.css";
import Announcements from '../Announcements/Announ'

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
      <h3>Announcements</h3>
      <Announcements/>
      </div>
      <div>
        
        <h3>Teachers on leave</h3>
        <Updates />
        
      </div>
    </div>
  );
};

export default RightSide;
