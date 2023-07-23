import React from 'react'
import './ExploreStyle.css'
import pic1 from '../img/job.jpg'
import pic2 from '../img/office.jpg'
import pic3 from '../img/summer.jpg'
import { Link } from 'react-router-dom';


const Offer = () => {
    return (
        <section className="campus">
            <h1>What we Offer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="row">
                <div className="campus-col">
                    <img src={pic1} alt='pic1' />
                    <div className="layer">
                        <Link to={'/recuitment'} ><h3>RECUITMENTS</h3></Link>
                    </div>
                </div>
                <div className="campus-col">
                    <img src={pic2} alt='pic2' />
                    <div className="layer">
                        <Link to={'/summerTraining '} ><h3>SUMMER TRAINING</h3></Link>
                    </div>
                </div>
                <div className="campus-col">
                    <img src={pic3} alt='pic3' />
                    <div className="layer">
                        <Link to={'/placementoffice'} ><h3>TRAINING & PLACEMENT <br />OFFICE</h3></Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Offer;
