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
export default function Services() {
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
               <Link class="nav-link active" aria-current="page" to="/services">Services</Link>
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
      <Video />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
             <p style={x}><b>Services</b></p>
        <ol style={listItemStyle}>
        <li style={{paddingBottom:"1px"}}><b>1.</b> Issue & Return of Books</li>
         <li style={{paddingBottom:"1px"}}><b>2.</b> Internet & Reprography (Xerox)</li>
        
            
            <li style={{paddingBottom:"1px"}}><b>3.</b> Bibliography and Reference Services</li>
           
            <li style={{paddingBottom:"1px"}}><b>4.</b> Career Guidance & Inter-library loan</li>
      
            
               <li style={{paddingBottom:"1px"}}><b>5.</b> Alerting service of <b>new arrival of books</b></li>
                   <li style={{paddingBottom:"1px"}}><b>6.</b> Organization and Services from CDs / DVDs</li>
                   <li style={{paddingBottom:"1px"}}><b>7.</b> Listing of open access Books and Journals</li>
            <li style={{paddingBottom:"1px"}}><b>8.</b> Alerting service of <b>Career Guidance Sources</b></li>
            <li><b>9.</b> Alerting service of <b>current content of journals</b></li>
           
            
        
                
            <li style={{paddingBottom:"1px"}}><b>10.</b> Awareness service of current contents of journals</li>
            <li style={{paddingBottom:"1px"}}><b>11.</b> Online Public Access Catalogue (OPAC / WEB OPAC)</li>
            <li style={{paddingBottom:"1px"}}><b>12.</b> Reminders are sent through e-mail for overdue books</li>
            
            
            <li style={{paddingBottom:"1px"}}><b>13.</b> Listing of the reference websites of different disciplines</li>
            <li style={{paddingBottom:"1px"}}><b>14.</b> Services through Institutional Membership<b> a.</b> British Council Library<br></br>membership with e-resources<b> b.</b> American Library membership</li> 
        </ol>          
          </div>
          <div className="col-md-6">
            <Quicklinks />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
