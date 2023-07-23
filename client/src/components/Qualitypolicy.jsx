import React from "react";
import './Qualitypolicy.css';
import Navbar from "./Navbar";
import HomeHero from "./HomeHero";
import Footer from "./Footer";
const qu1 = './images/quality3.avif'


const Qualitypolicy = () => {
    return (
        <>
            <Navbar />
            <HomeHero
                cName="hero-mid"
                heroImg="images\quality0.avif"
                text="“Quality is never an accident; it is always the result of high intention,
                 sincere effort, intelligent direction and skillful execution; it represents the wise 
                 choice of many alternatives.” ~William A. Foster"
                title="Quality Policy"
                btnClass="hide"
            />

            <div className="card20">

                <div className="card20-side">
                    <img src={qu1} alt={qu1}></img>
                </div>
                <div className="card20-side">
                    <div className="card20-body">
                        <h2 className="card20-title">Quality Policy</h2>
                        <p className="card20-text">
                            <ul>
                                <li>To compete with global benchmarking of excellence through efforts to prepare dynamic and
                                    caring citizens.</li>

                                <li> To encourage and foster quality in daily practices in different areas of activity.</li>

                                <li> To imbibe self-evaluation and continuous correction.</li>
                            </ul>
                        </p>

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default Qualitypolicy;