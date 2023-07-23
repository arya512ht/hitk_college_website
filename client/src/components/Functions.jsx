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
                <Link class="nav-link active" aria-current="page" to="/functions">Functions</Link>
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
          <div className="col-md-9">
            <p style={x}>
              <b>Functions</b>
            </p>
            <ol style={listItemStyle}>
              <li >
                <b>1.</b> The Central Library follows the most modern systems by
                allowing readers to have direct access to the shelves of the
                books and journals. The readers, thus, can browse and select
                books of their choice.
              </li>
              <li>
                <b>2.</b> It follows library management software, called "LIBSYS
                (LSEASE)". It is an integrated multi-user Library Management
                System. The main functions of this system are processing of
                books, using "Bar-Code" and circulation of books applying
                scanner.
              </li>
              <li>
                <b>3.</b> Procurement of Books ,Journals and other materials
                etc. and record of attendance is done through ERP system of the
                Institute.
              </li>
              <li>
                <b>4.</b> Books can be borrowed for home reading (maximum 6
                books for 60 days for teachers, 4 books for B.Tech & MCA and 5
                books for M.Tech students for 21 days and 3 books for 30 days
                for staff members).
              </li>
              <li>
                <b>5.</b> <b>"Semester Issue"</b> facility: It is an additional
                facility provided to B.Tech and MCA students. They can retain
                books (normally one text book for each subject) for the entire
                semester.
              </li>
            </ol>
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
