import React from "react";
import './Overview.css';

const pic1 = './images/overview1.jpg'
const pic2 = './images/overview8.png'
const pic3 = './images/overview3.jpg'
const pic4 = './images/overview5.png'
const pic5 = './images/overview6.jpg'
const pic6 = './images/overview7.jpg'

const Overview = () => {
    return (
        <>

            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic1} alt={pic1} height={'700px'} width={'100%'} classNameName="d-block w-100"></img>
                        <div className="over-caption" >
                            <h6> Inspired by the noble cause of education and with a philanthropic zeal, a group of twenty-two like-minded industrialists
                                of Kolkata established Kalyan Bharti Trust (KBT), a public charitable foundation, to promote and provide higher
                                education in the country and in the State of West Bengal, in particular.
                                The vision of the founders of Kalyan Bharti Trust, 'to prepare dynamic and caring citizens to meet the challenges of
                                global society while retaining their traditional values', has found its tangible reality in the provision of educational
                                opportunities for a broad spectrum of learners - from the Primary to the Tertiary levels.
                            </h6>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic2} alt={pic2} height={'700px'} width={'100%'} classNameName="d-block w-100"></img>
                        <div className="over-caption" >
                            <h6> The six wings of the Trust - The Heritage School (THS), Heritage Institute of Technology (HIT-K), The Heritage Academy
                                (THA), Heritage Business School (HBS), Heritage Law College (HLC) & The Heritage College (THC) together constitute an
                                oasis of learning and have, over the years, carved a niche for themselves among academicians, faculty, students and
                                society, in general.</h6>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic3} alt={pic3} height={'700px'} width={'100%'} classNameName="d-block w-100"></img>
                        <div className="over-caption" >
                            <h6> A harmonious integration of valued traditions with modern outlook is the guiding principle behind the development of the
                                academic environment that constitutes the basic philosophy of these six educational initiatives of Kalyan Bharti Trust.
                            </h6>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic4} alt={pic4} height={'700px'} width={'100%'} classNameName="d-block w-100"></img>
                        <div className="over-caption" >
                            <h6> A harmonious integration of valued traditions with modern outlook is the guiding principle behind the development of the
                                academic environment that constitutes the basic philosophy of these six educational initiatives of Kalyan Bharti Trust.
                                Besides these educational initiatives, Kalyan Bharti Trust carries out its social responsibilities through SURYAKIRAN &
                                KALYANI. 'Suryakiran' is engaged in spreading education to the disadvantaged children of the neighborhood, while
                                'Kalyani', a charitable health-care center, provides basic medical facilities to the poor & needy.
                            </h6>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic5} alt={pic5} height={'700px'} width={'100%'} classNameName="d-block w-100"></img>
                        <div className="over-caption" >
                            <h6> The Trust has plans to set up a Medical College, an Institute of Design and finally, a Private University in the near
                                future.</h6>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic6} alt={pic6} height={'700px'} width={'100%'} classNameName="d-block w-100"></img>
                        <div className="over-caption" >
                            <h6> Kalyan Bharti Trust shares a great Indian dream - a dream of a new tomorrow where technological advancement would go
                                hand in hand with intellectual development in laying the cornerstone of a spiritually evolved new-age Indian; one who
                                would stand tall to face global challenges to etch India's pride in the annals of international progress.
                            </h6>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>




        </>
    );
}

export default Overview;
