import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import "./ExploreStyle.css";
import "./OnlinefacilityStyle.css";
import HomeHero from "../components/HomeHero";
import { Link } from 'react-router-dom';

function LoginSection() {
    return (
        <section className="online-login">
            <div className="row">
                <div className="login-col">
                    <img src="images/student.jpg" alt="Student" height={'350px'} width={'350'} />
                    <p>
                        <Link to="/StudentLogin">
                            <button className="btn btn-primary">STUDENT</button>
                        </Link>
                    </p>
                </div>
                <div className="login-col">
                    <img src="images/teacher.jpg" alt="Teacher" height={'350px'} width={'350'} />
                    <p>
                        <Link to="/Adminloginform">
                            <button className="btn btn-primary">ADMIN</button>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

function CampusSection() {
    return (
        <section className="campus">
            <h1>Other Facilities</h1>
            <div className="row">
                <div className="campus-col">
                    <img src="images/pay.jpg" alt="Online Fees Payment" />
                    <div className="layer">
                        <Link to="/payment"><h3>Online Fees Payment</h3></Link>
                    </div>
                </div>
                <div className="campus-col">
                    <img src="images/login.jpg" alt="Know your log-in details" />
                    <div className="layer">
                        <Link to="/know"><h3>Student Virtual ID</h3></Link>
                    </div>
                </div>
                <div className="campus-col">
                    <img src="images/routine.jpg" alt="Class Routine" />
                    <div className="layer">
                        <Link to="/classroutine"><h3>Class Routine</h3></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
function Onlinefacility() {
    return (
        <>
            <Navbar />
            <HomeHero
                cName="hero-mid"
                heroImg="/images/online0.avif"
                title="HITK Online Facilities"
                btnClass="hide"
            />
            <LoginSection />
            <CampusSection />
            <Footer />
        </>
    );
}

export default Onlinefacility;