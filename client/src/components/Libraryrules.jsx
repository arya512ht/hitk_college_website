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
                <Link class="nav-link active" aria-current="page" to="/libraryrules">Library Rules</Link>
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
              <p style={x}><b>Library Rules</b></p>
              <ul style={listItemStyle} type="disc">
                <li><b>1.</b> For any help, approach the "Information Desk" or any library staff.</li>
                <li><b>2.</b> CONTACT NO.: 03366270600 ( Ext. 860-865 )</li>
                <li><b>3.</b> Library membership card is compulsory while issuing books for home reading. It is not transferable.</li>
                <li><b>4.</b> The books must NOT be shelved by the users and should be left on the table.</li>
                <li><b>5.</b> Books once issued will not be allowed to keep inside the library.</li>
                <li><b>6.</b> Guidelines for photocopying should be followed.</li>
                <li><b>7.</b> Students are not allowed in the library without membership cards</li>
                <li><b>8.</b> Strict silence should be maintained inside the library.</li>
                <li><b>9.</b> Carrying of bags, folders, personal books or any printed materials, laptop, walkman, food articles are strictly prohibited in the library. Mobile phones must be switched off before entering the library.</li>
                <li><b>10.</b> Any damage or loss of book should be replaced within a week by a new one with prior intimation to the Librarian in advance.</li>
                <li><b>11.</b> No project/ laboratory works, group discussions or any kind of class meetings would be allowed inside the library.</li>
                <li><b>12.</b> Issued books along with the gate pass must be shown to the security personnel at the entrance before leaving the library.</li>
                <li><b>13.</b> Loss of library/Identity card must be reported to the Librarian immediately. For a duplicate card, all supporting documents regarding its loss should be submitted to the Administration</li>

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
