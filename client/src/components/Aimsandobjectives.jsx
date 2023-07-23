import React from "react";
import Footer from "./Footer";
import HomeHero from "./HomeHero";
import Navbar from "./Navbar";
import AboutImg from "../assets/night.jpg";
import Video from './Video';
import { Link } from 'react-router-dom';
import Quicklinks from "./Quicklinks";

const x = {
  color: "blue",
  fontSize: "30px",
  margin: "3px",
  
};
const y = {
  overflowX: "hidden",
};
const listItemStyle = {
  listStyle: "none",
  margin: "0",
  padding: "0",
  marginBotton: "25px",
};

export default function Aimsandobjectives() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Library"
        btnClass="hide"
      />
      <nav class="navbar navbar-expand-lg bg-body-tertiary" >
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="/library">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/aimsandobjectives">Aims and Objective</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/functions">Functions</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/services">Services</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/collections">Collections</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/digitallibrary">Digital Library</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/libraryrules">Library Rules</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/otherlibraries">Other Libraries</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <div style={y}>
        <Video />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <p style={x}>
                <b>
                  Aims and Objectives
                </b>
              </p>
              <ul style={listItemStyle}>
                <li>
                  <b>1.</b> To select, acquire, organize and utilize reading
                  materials for the purpose of information dissemination, relevant
                  to the aims and objectives of the Institute.
                </li>
                <li>
                  <b>2.</b> To provide services to users for effective utilization
                  of library resources.
                </li>
              </ul>
              <br></br>
              <p>
                To encourage reading habits particularly of the student community
                and to make them aware of the importance of Library in career
                building.
              </p>
            </div>
            <div className="col-md-5">
              <Quicklinks />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
