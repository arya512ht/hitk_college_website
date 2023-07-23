import React from 'react'
import Footer from "./Footer";
import HomeHero from "./HomeHero";
import Navbar from "./Navbar";
import Video from './Video';
import Libabout from './Libabout';
import { Link } from 'react-router-dom';
export default function Library() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg="/images/library1.avif"
        title="Library"
        btnclassName="hide"
      />
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link class="nav-link active" aria-current="page" to="/library">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aimsandobjectives">Aims and Objective</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/functions">Functions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/collections">Collections</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/digitallibrary">Digital Library</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/libraryrules">Library Rules</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/otherlibraries">Other Libraries</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <Video />
      <Libabout />
      <Footer />
    </>
  )
}
