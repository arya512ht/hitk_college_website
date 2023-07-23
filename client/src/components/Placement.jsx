import React from 'react'
import Offer from "./Offer";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import Footer from './Footer';

function Placement() {
  return (
    <>
    <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg="/images/training1.avif"
        title="Training and Placement"
        btnClass="hide"
      />
      <Offer />
      <Footer />
    </>
  )
}

export default Placement;
