import React from "react";
import './Boardoftrustee.css';
import Navbar from "./Navbar";
import HomeHero from "./HomeHero";
import Footer from "./Footer";

const t1 = './images/h.k.chowdary.jpg'
const t2 = './images/sajjan.jpg'
const t3 = './images/sanjoy.bansal.jpg'
const t4 = './images/dayaram.agarwal.jpg'
const t5 = './images/d.c.agarwaal.jpg'
const t6 = './images/g.swarup.jpg'
const t7 = './images/h.p.budhia.jpg'
const t8 = './images/j.chitlangia.jpg'
const t9 = './images/k.k.dugar.jpg'
const t10 = './images/m.p.agarwal.jpg'
const t11 = './images/m.k.jalan.jpg'
const t12 = './images/m.periwal.jpg'
const t13 = './images/n.p.dalmia.jpg'
const t14 = './images/n.p.k.koya.jpg'
const t15 = './images/p.r.argarwala.jpg'
const t16 = './images/r.kejriwal.jpg'
const t17 = './images/s.agarwal.jpg'
const t18 = './images/s.swarup.jpg'
const t19 = './images/s.shah.jpg'
const t20 = './images/s.c.bansal.jpg'
const t21 = './images/v.saran.jpg'


const Boardoftrustee = () => {
    return (
        <>
            <Navbar />
            <HomeHero
                cName="hero-mid"
                heroImg="images\trustee0.avif"

                title="Our Trustee Members"
                btnClass="hide"
            />

            <div className="mycontainer">


                <div className="row1">



                    <div className="card1">
                        <img src={t1} alt={t1} height={'180px'} width={'100%'}></img>
                        <span>Chairman</span>
                        <h6>Shri Hari Krishna Chaudhary</h6>

                        <span>Vikram India Ltd.</span>
                    </div>

                    <div className="card1">

                        <img src={t2} alt={t2} height={'180px'} width={'100%'}></img>
                        <span>Secretary</span>
                        <h6>Shri Sajjan Bhajanka</h6>

                        <span> Century Plyboards (I) Ltd.</span>
                    </div>


                    <div className="card1">
                        <img src={t3} alt={t3} height={'180px'} width={'100%'}></img>
                        <span>Treasurer</span>
                        <h6> Shri Sajan Kumar Bansal</h6>
                        <span> Skipper Ltd.</span>
                    </div>

                    <div className="card1">
                        <img src={t4} alt={t4} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6> Shri Dayaram Agarwal</h6>
                        <span>  RGA Software Systems Pvt. Ltd.</span>
                    </div>

                    <div className="card1">
                        <img src={t5} alt={t5} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6>Shri Dharam Chand Agarwal </h6>
                        <span>Hi-Tech Systems & Services Ltd.</span>
                    </div>

                    <div className="card1">
                        <img src={t6} alt={t6} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6> Shri Gaurav Swarup</h6>
                        <span>Paharpur Cooling Towers Ltd.</span>
                    </div>
                </div>


                <div className="row1">

                    <div className="card1">
                        <img src={t7} alt={t7} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6> Shri Hari Prasad Budhia</h6>
                        <span>Patton Group.</span>
                    </div>

                    <div className="card1">
                        <img src={t8} alt={t8} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6>Shri Jaydeep Chitlangia </h6>
                        <span>Madhya Bharat Papers Ltd.</span>
                    </div>

                    <div className="card1">
                        <img src={t9} alt={t9} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6> Shri Kamal Kumar Dugar</h6>
                        <span>KK Dugar & Co.</span>
                    </div>

                    <div className="card1">
                        <img src={t10} alt={t10} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6> Shri Mahabir Prasad Agarwal</h6>
                        <span>Shyam Sel & Power Ltd.</span>
                    </div>

                    <div className="card1">
                        <img src={t11} alt={t11} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6>Shri Mahendra Kumar Jalan </h6>
                        <span> MKJ Pvt Ltd.</span>
                    </div>

                    <div className="card1">
                        <img src={t12} alt={t12} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6> Shri Manish Periwal</h6>
                        <span>Pioneer Urban Land & Infrastructure Ltd.</span>
                    </div>

                </div>
                <div className="row1">

                    <div className="card1">
                        <img src={t13} alt={t13} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6>Shri Narain Prasad Dalmia </h6>
                        <span>Dalmia Securities Pvt. Ltd.</span>
                    </div>

                    <div className="card1">
                        <img src={t14} alt={t14} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6> Shri Narhari Prasad K. Koya</h6>
                        <span>Indian Coal Agency</span>
                    </div>

                    <div className="card1">
                        <img src={t15} alt={t15} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6> Shri Prahlad Rai Agarwala</h6>
                        <span>Rupa & Co. Ltd.</span>
                    </div>

                    <div className="card1">
                        <img src={t16} alt={t16} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6> Shri Raj Kejriwal</h6>
                        <span>Kiswok Industries Pvt. Ltd.</span>
                    </div>

                    <div className="card1">
                        <img src={t17} alt={t17} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6>Shri Sanjay Agarwal </h6>
                        <span>Century Plyboards (I) Ltd.</span>
                    </div>

                    <div className="card1">
                        <img src={t18} alt={t18} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6>Shri Siddharth Swarup </h6>
                        <span>Paharpur Cooling Towers Ltd.</span>
                    </div>

                </div>
                <div className="row1">

                    <div className="card1">
                        <img src={t19} alt={t19} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6> Shri Sundeep Shah</h6>
                        <span>Eastern Silk Industries Ltd.</span>
                    </div>

                    <div className="card1">
                        <img src={t20} alt={t20} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6>Shri Suresh C. Bansal </h6>
                        <span>Beekay Steel Industries Ltd.</span>
                    </div>

                    <div className="card1">
                        <img src={t21} alt={t21} height={'180px'} width={'100%'}></img>
                        <span>Member</span>
                        <h6>Shri Vishambhar Saran</h6>
                        <span>Visa Steel Ltd.</span>
                    </div>


                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Boardoftrustee;