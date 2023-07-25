import React from "react";
import Sidebar from "./Sidebar";
import ViewStudent from "./ViewStudent";

const Main = () => {
  return (
    <div className="adminmain">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-2 m-0 p-0">
            <Sidebar />
          </div>
          <div className="col-12 col-md-9 col-lg-10 m-0 p-0">
            <ViewStudent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

