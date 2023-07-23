import React from "react";
import Footer from "./Footer";
import HomeHero from "./HomeHero";
import Navbar from "./Navbar";
import AboutImg from "../assets/night.jpg";
import { Link } from 'react-router-dom';
import Video from './Video';
import Quicklinks from "./Quicklinks";

const listItemStyle = {
  listStyle: "none",
  margin: "0",
  padding: "0",
  marginBotton: "25px",
};
const y = {
  overflowX: "hidden",
};
const x = {
  color: "blue",
  fontSize: "30px",
  margin: "3px",
};

const p = {
  fontFamily: "Arial", textAlign: "justify", fontSize: "15px", color: "rgb(32, 9, 9)",
}
export default function Collections() {
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
                <Link class="nav-link active" aria-current="page" to="/collections">Collections</Link>
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
            <div className="col-md-9">
              <p style={x}><b>Collections</b></p>
              <p style={p}>
                The<b> HITK</b> library has a generous collection of Engineering & Management books, Reference books, Scientific Journals, Reports, etc. In addition, it has books on Humanities, Social Sciences and Career Guidance </p>
              <ul style={listItemStyle}>
                <li><b>1.</b> <b><u>Journals</u></b>:</li>
                <ul style={listItemStyle}>
                  <li><b>a.</b> E-Journals : <b>217</b></li>
                  <li><b>b.</b> Journals (Back Volumes):      <b>1800</b>(approx.)</li>
                  <li style={{ paddingBottom: "7px" }}><b>c.</b> Subscribed Journals and Magazines (printed) : <b>150</b></li>
                </ul>

                <li ><b>2.</b> <b><u>E-resources</u></b></li>
                <ul style={listItemStyle}>
                  <li><b>a.</b> NPTEL</li>
                  <li><b>b.</b> EPW-Online, HBR-Online</li><li><b>c.</b> Institutional Repository</li>
                  <li><b>d.</b> On-line subscription:IEEE (ASPP),DELNET</li>

                  <li><b>e.</b> National Digital Library of India</li>
                  <ul style={listItemStyle}>
                    <li ><b>i.</b> <b>Departmental e-Journals</b></li>
                    <li><b>ii.</b> <b>Question papers</b> of all the departments (all semesters)  under autonomous HITK.</li>
                    <li style={{ paddingBottom: "7px" }}><b>iii.</b> <b>Bibliographical</b> data of the publications of the    Academics and others of   HITK have been uploaded.</li>

                  </ul>

                </ul>
                <li style={{ paddingBottom: "6px" }}><b>3.</b> <b><u>Books</u></b> : Volume-<b>64426</b>(approx.) Title-<b>9112</b>(approx.)</li>
                <li><b>4. </b><b><u>Other Materials (like CD-ROM, Floppy, DVDs etc): 3000 (approx.)</u></b></li>
              </ul>
            </div>
            <div className="col-md-3">
              <Quicklinks />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
