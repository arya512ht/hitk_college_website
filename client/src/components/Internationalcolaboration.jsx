import React from "react";
import './Internationalcolaboration.css';
import Navbar from "./Navbar";
import HomeHero from "./HomeHero";
import Footer from "./Footer";

const ir1 = './images/internationalCollaboration.jpg'

const Internationalcolaboration = () => {
    return (
        <>
            <Navbar />
            <HomeHero
                cName="hero-mid"
                heroImg="images\international0.avif"
                title="International Collaboration"

            />
            <div class="card10">
                <img src={ir1} class="card10-img-top" alt={ir1}></img>
                <div class="card10-body">
                    <h5 class="card10-title">International Collaboration</h5>
                    <div class="card10-text">
                        <ol>
                            <li>MOU signed with University of Massachusetts, Lowell for a variety of joint academic and education activities
                                such as :-</li>
                            <ul>
                                <li> Summer undergraduate experiences;</li>

                                <li>Dual degree programs where selected HITK students on completion of their B.Tech. degree will
                                    be able to proceed to UML to complete their MS;</li>

                                <li>Faculty and student exchanges and opportunities for paid internships;</li>

                                <li>Cooperation in academic and research programs in nanotechnology oengineering, including joint
                                    Ph.D. programs;</li>
                            </ul>



                            <li> Agreement signed with New Jersey Institute of Technology (NJIT), NJ, USA with the
                                following objectives to provide a meaningful learning and research experience to
                                undergraduate students that will stimulate interest both in seeking a better future,
                                performing research and pursuing graduate studies.</li>

                            <li> MOU signed with College of Natural Science, Sungkyunkwan University, Korea
                                with the following objectives :-</li>
                            <ul>
                                <li> Reciprocal exchange of faculty, Staff and students;</li>

                                <li>Engagement in joint research projects;</li>

                                <li> Fostering exchange of academic publications and information;</li>

                                <li>Promotion of other academic activities.</li>
                            </ul>


                            <li>
                                Negotiations are on with the University of Sussex, UK for academic collaboration.
                            </li>
                        </ol>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Internationalcolaboration;