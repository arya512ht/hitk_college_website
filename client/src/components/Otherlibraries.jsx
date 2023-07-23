import React from "react";
import Footer from "./Footer";
import HomeHero from "./HomeHero";
import Navbar from "./Navbar";
import AboutImg from "../assets/night.jpg";
import { Link } from 'react-router-dom';
import Video from './Video';
import Quicklinks from "./Quicklinks";

const k = {
  fontFamily: "Arial", fontSize: "18px", color: "rgb(32, 9, 9)",
}
const x = {
  color: "blue",
  fontSize: "30px",
  margin: "3px",
};
const y = {
  overflowX: "hidden",
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
                <Link class="nav-link" to="/aimsandobjectives">Aims and Objective</Link>
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
                <Link class="nav-link active" aria-current="page" to="/otherlibraries">Other Libraries</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <div style={y}>

        <Video />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <p style={x}><b>Other Libraries</b></p>
              <p style={k}>
                Within the Campus, there are Heritage Business School library(for MBA), The Heritage Academy Library (for BBA, BCA & Media science), The Heritage Law college library and The Heritage College Library . The Heritage School has its libraries for different levels of students.
              </p>
            </div>
            <div className="col-md-6">
              <Quicklinks />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
