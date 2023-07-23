import React from "react";
import "./ExploreStyle.css";
import { Link } from "react-router-dom";

function CampusSection() {
  return (
    <section className="campus">
      <h1>ACADEMICS</h1>
      <p>Dive into a digital treasure trove of Academics section, including Examination, Result and Training & Placement sections.</p>
      <div className="row">
        <div className="campus-col">
          <img src="images/exam.jpg" alt="Exam" />
          <div className="layer">
            <Link to="/examination"><h3>EXAMINATION</h3></Link>
          </div>
        </div>
        <div className="campus-col">
          <img src="images/result.jpg" alt="Result" />
          <div className="layer">
            <Link to="/result"><h3>RESULT</h3></Link>
          </div>
        </div>
        <div className="campus-col">
          <img src="images/place2.jpg" alt="Training and Placement" />
          <div className="layer">
            <Link to="/placement"><h3>
              TRAINING & PLACEMENT
            </h3></Link>
          </div>

        </div>
      </div>
    </section>
  );
}
function FacilitiesSection() {
  return (
    <section className="campus">
      <h1>FACILITIES</h1>
      <p>Dive into a digital treasure trove of Facilities section, including Library, Sports and Canteen section.</p>
      <div className="row">
        <div className="campus-col">
          <img src="images/lib.jpg" alt="Library" />
          <div className="layer">
            <Link to="/library"><h3>LIBRARY</h3></Link>
          </div>
        </div>
        <div className="campus-col">
          <img src="images/sports.jpg" alt="Sports" />
          <div className="layer">
            <Link to="/sports"><h3>SPORTS</h3></Link>

          </div>
        </div>
        <div className="campus-col">
          <img src="images/canteen.jpg" alt="Canteen" />
          <div className="layer">
            <Link to="/canteen"><h3>CANTEEN</h3></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta">
      <h1>Enroll For Our Various Courses<br />Anywhere From The World</h1>
      <Link to="/admission" className="admission-btn">REGISTRATION</Link>
    </section>
  );
}

function Explore() {
  return (
    <div>
      <CampusSection />
      <FacilitiesSection />
      <CTASection />
    </div>
  );
}

export default Explore;
