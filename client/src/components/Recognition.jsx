import React from "react";
import './Recognition.css'
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import HomeHero from "./HomeHero";
import Footer from "./Footer";

const r1 = './images/naac.jpeg'
const r2 = './images/nba.jpeg'
const r3 = './images/nirf.png'
const r4 = './images/ugc.jpeg'
const r5 = './images/aicte.jpeg'
const r6 = './images/makaut.png'


const Recognition = () => {
    return (
        <>
            <Navbar />
            <HomeHero
                cName="hero-mid"
                heroImg="images\recog1.avif"
                title=" Recognition of Achievement"

            />
           
            <div className="myclass1">
                <div className="newrow1">
                    <div className="box1">
                        <div className="box1-title">
                            <img src={r1} alt={r1} height={'180px'} width={'150px'}></img>
                        </div>
                        <div className="box1-body">
                            <div className="box1-body-title"><h6>National Assessment And Accreditation Council</h6></div>
                            <div className="box1-body-body">
                                <li>Accredited with 'A' Grade by NAAC w.e.f. 12/07/2022
                                    <NavLink to="https://www.heritageit.edu/PDF/NAAC_COA.pdf" target="_blank" rel="">
                                        Click
                                    </NavLink></li>
                            </div>
                        </div>
                    </div>
                    <div className="box1">
                        <div className="box1-title">
                            <img src={r2} alt={r2} height={'180px'} width={'150px'}></img>
                        </div>
                        <div className="box1-body">
                            <div className="box1-body-title"><h6>National Board of Accreditation</h6></div>
                            <div className="box1-body-body">
                                <li>Accreditation Status
                                    <NavLink to="https://www.heritageit.edu/PDF/AccreditationStatus2022_23.pdf" target="_blank" rel="">
                                        Click
                                    </NavLink></li>
                                <li> Accreditation Letters - B.Tech
                                    <NavLink to="https://www.heritageit.edu/PDF/NBA_HITOrder_28_08_2022AEIE_ECE_ChE_BT.pdf" target="_blank" rel="">
                                        Click
                                    </NavLink></li>
                                <li>Accreditation Letters - M.Tech
                                    <NavLink to="https://www.heritageit.edu/PDF/HIT03_09_2019.pdf" target="_blank" rel="">
                                        Click
                                    </NavLink>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="box1">
                        <div className="box1-title">
                            <img src={r3} alt={r3} height={'180px'} width={'150px'}></img>
                        </div>
                        <div className="box1-body">
                            <div className="box1-body-title"><h6>Institute Ranking Framework</h6></div>
                            <div className="box1-body-body">
                                <li> Certificate of NIRF - 2020<NavLink to="https://www.heritageit.edu/PDF/CertificateOfNIRF20.pdf" target="_blank" rel="">
                                    Click
                                </NavLink></li>
                                <li>Certificate of NIRF - 2019 <NavLink to="https://www.heritageit.edu/PDF/CertificateOfNIRF19.pdf" target="_blank" rel="">
                                    Click
                                </NavLink></li>
                            </div>
                        </div>
                    </div>

                    <div className="box1">
                        <div className="box1-title">
                            <img src={r4} alt={r4} height={'180px'} width={'150px'}></img>
                        </div>
                        <div className="box1-body">
                            <div className="box1-body-title"><h5>Recognition</h5>
                                <h6> declared as autonomous by UGC since 2014</h6></div>
                            <div className="box1-body-body">
                                <li>Autonomy Letter from UGC
                                    <NavLink to="https://www.heritageit.edu/PDF/AutonomyOrder2021.pdf" target="_blank" rel="">
                                        Click
                                    </NavLink>
                                </li>
                                <li>Autonomy Letter from MAKAUT
                                    <NavLink to="https://www.heritageit.edu/PDF/MAKAUT%20office%20order%20on%20granting%20Autonomy%20to%20Heritage%20Institute%20of%20Technology%20FROM%202020-21%20TO%202024-25.pdf" target="_blank" rel="">
                                        Click
                                    </NavLink>
                                </li>
                                <li>Institute recognised by UGC u/s 2(f)
                                    <NavLink to="https://www.heritageit.edu/PDF/UG_Order_US_2f.pdf" target="_blank" rel="">
                                        Click
                                    </NavLink>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="box1">
                        <div className="box1-title">
                            <img src={r5} alt={r5} height={'180px'} width={'150px'}></img>
                        </div>
                        <div className="box1-body">
                            <div className="box1-body-title"><h5>AICTE Approval Letters</h5></div>
                            <div className="box1-body-body">
                                <li>AICTE Approval 2022-23
                                    <NavLink to="https://www.heritageit.edu/AICTEORDERPDF/2022_23AICTEOrder.pdf" target="_blank" rel="">
                                        Click
                                    </NavLink>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="box1">
                        <div className="box1-title">
                            <img src={r6} alt={r6} height={'180px'} width={'150px'}></img>
                        </div>
                        <div className="box1-body">
                            <div className="box1-body-title"><h5>MAKAUT Affiliation Letters</h5></div>
                            <div className="box1-body-body">
                                <li>B.Tech Affiliation Letter 2021-22
                                    <NavLink to="https://www.heritageit.edu/PDF/BTech_AffiliationLetter21_22.pdf" target="_blank" rel="">
                                        Click
                                    </NavLink>
                                </li>
                                <li>MCA Affiliation Letter 2021-22
                                    <NavLink to="https://www.heritageit.edu/PDF/MCA_AffiliationLetter21_22.pdf" target="_blank" rel="">
                                        Click
                                    </NavLink>
                                </li>
                                <li>M.Tech Affiliation Letter 2021-22
                                    <NavLink to="https://www.heritageit.edu/PDF/MTech_AffiliationLetter21_22.pdf" target="_blank" rel="">
                                        Click
                                    </NavLink>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Recognition;