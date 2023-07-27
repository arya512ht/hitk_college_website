import React from "react";
import './Announ.css'
import { Announcements} from "../../Data/Data";

const Updates = () => {
  return (
    <div className="Updates">
      {Announcements.map((update) => {
        return (
          <div className="update">
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.titel}</span>
                <span> {update.info}</span>
              </div>
               
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
