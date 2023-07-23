import React from "react";
import './Vision.css';
import Navbar from "./Navbar";
import HomeHero from "./HomeHero";
import Footer from "./Footer";
const vis1 = './images/vision3.avif'
const vis2 = './images/vision2.avif'


const Vision = () => {
    return (
        <>
            <Navbar />
            <HomeHero
                cName="hero-mid"
                heroImg="images\vision0.avif"
                title="Our Mission Our Vision"
                text="“A spirit with a vision is a dream with a mission.”— Neil Peart"

            />
            <div className="card-deck30">
                <div className="card30">
                    <img src={vis2} className="card30-img-top" alt={vis2}></img>
                    <div className="card30-body">
                        <h5 className="card30-title">Mission</h5>
                        <p className="card30-text"><ul>
                            <li>To prepare students with strong foundation in their disciplines and other areas of learning.
                            </li>

                            <li> To provide an environment for critical and innovative thinking, and to encourage life-long
                                learning.</li>

                            <li>To develop entrepreneurial and professional skills.</li>

                            <li>To promote research and developmental activities and interaction with industry.</li>

                            <li>To inculcate leadership qualities for serving the society.To prepare students with strong
                                foundation in their disciplines and other areas of learning.</li>
                        </ul></p>
                    </div>

                </div>
                <div className="card30">
                    <img src={vis1} className="card30-img-top" alt={vis1}></img>
                    <div className="card30-body">
                        <h5 className="card30-title">Vision</h5>
                        <p className="card30-text">To prepare dynamic and caring citizens to meet the challenges of global society while retaining their
                            traditional values.</p>
                    </div>

                </div>

            </div>
                <Footer/>
        </>
    );
}

export default Vision;