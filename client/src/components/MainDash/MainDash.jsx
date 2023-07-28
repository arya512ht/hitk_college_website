import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import { useLocation } from "react-router-dom";

const MainDash = () => {
  const location = useLocation();
  const userData = location.state?.user; 
  return (
    <div className="MainDash">
      <h1>Student Dashboard</h1>
      <Cards userData={userData} />
      <Table />
    </div>
  );
};

export default MainDash;
