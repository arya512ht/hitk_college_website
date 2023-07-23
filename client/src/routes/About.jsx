import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import "../components/About.css";

const img1 = '/images/Campus2.jpg'
const aboutpic = './images/hitkAbout.jpg'
function About() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={aboutpic}
        title="About Us"
        btnClass="hide"
      />
      <div className="my-about-us">
        <div className="my-row">
          <div className="my-about-col">
            <h2>We Are One Of The Best Engineering College In Eastern India</h2>
            <p>Heritage Institute of Technology, popularly known as HITK or HIT is a self-financed institute in
              the state of the West Bengal. Heritage Institute of Technology is ranked one of the best engineering colleges in Eastern India.
              The campus is situated on the southern fringes of Kolkata. It is affiliated with Maulana Abul Kalam Azad University of
              Technology Kolkata.Heritage Institute of Technology was set up on the eastern fringes of Kolkata in 2001 by a group of industrialists
              hailing from the flourishing information technology, electronics, and related industries around Kolkata, and some
              public figures. The foundation behind the growth of HITK is the Kalyan Bharti Trust. To meet the demand for technical
              manpower and in view of fiscal constraints at the governmental level, the Kalyan Bharti Trust supplemented the state
              government's efforts in setting up new engineering colleges by establishing the Heritage Institute of Technology in
              September 2000</p>
          </div>
          <div className="my-about-col">
            <img src={img1} alt={img1} ></img>

          </div>
        </div>
        <div className="mymenu">
          {
            <nav>
              <div className="buttom">

                <NavLink to={'/Overview'} className={'nav'}><button type="button" className="btn btn-outline-primary" >overview Briefing</button></NavLink>
                <NavLink to={'/Vision'} className={'nav'}><button type="button" className="btn btn-outline-secondary">Mission-Vision</button></NavLink>
                <NavLink to={'/Qualitypolicy'} className={'nav'}><button type="button" className="btn btn-outline-success">Quality policy</button></NavLink>
                <NavLink to={'/Message'} className={'nav'}><button type="button" className="btn btn-outline-danger">Message From Us</button></NavLink>
                <NavLink to={'/Boardoftrustee'} className={'nav'}><button type="button" className="btn btn-outline-warning">Trustee Board</button></NavLink>
                <NavLink to={'/Recognition'} className={'nav'}><button type="button" className="btn btn-outline-info">Affiliation-Recognision</button></NavLink>
                <NavLink to={'/Internationalcolaboration'} className={'nav'}><button type="button" className="btn btn-outline-dark">International collaboration</button></NavLink>

              </div>
            </nav>

          }
        </div>





      </div>
      <Footer />
    </>
  );
}

export default About;