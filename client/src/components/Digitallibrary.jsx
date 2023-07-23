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
export default function Digitallibrary() {
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
               <Link class="nav-link active" aria-current="page" to="/digitallibrary">Digital Library</Link>
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
          <div className="col-md-6">
        <p style={x}><b>Digital Library</b></p>
        <ul style={listItemStyle}>
        <li>
           
            <b>
                <u>A.Institutional Repository</u>
            </b>
            <ol style={listItemStyle}>
                <li>&nbsp;<b>1.</b> Departmental e-journals</li>
                <li>&nbsp;<b>2.</b> Publications of Academics & Others</li>
                <li>&nbsp;<b>3.</b> Question Papers of Autonomous HITK</li>
                
                
                <li style={{paddingBottom:"18px"}}>&nbsp;<b>4.</b> "The Heritedge" a quarterly Newsletter</li>

            </ol>
        </li>
        <li>
        
            <b>
                <u>B.Online Sources & Services</u>
            </b>
            <ol style={listItemStyle}>
                <li>&nbsp;<b>1.</b> CDs & DVDs</li>
                <li>&nbsp;<b>2.</b> Online Books</li>
                
                <li>&nbsp;<b>3.</b> OPAC / Web-OPAC</li>
                <li>&nbsp;<b>4.</b> Open Access Resources</li>
                <li>&nbsp;<b>5.</b> Career Digest - e sources</li>
                <li>&nbsp;<b>6.</b> Online Journals / Databases</li>
                <li>&nbsp;<b>7.</b> Alerting of New Books / CAS of New Journals</li>

            </ol>
        </li>
        </ul>
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
