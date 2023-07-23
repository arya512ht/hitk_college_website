import React from 'react'
import pic1 from '../img/20p.jpg'
import pic2 from '../img/19p.jpg'
import pic3 from '../img/18p.jpg'
import pic4 from '../img/17p.jpg'
import pic5 from '../img/16p.jpg'
import pic6 from '../img/17p.jpg'
import pic7 from '../img/18p.jpg'
import './Newrec.css';


const NewRec = () => {
  return (

    <>

      <div className='details'>
        <div className='para'>
          <p>Training & Placement Cell compliments the efforts of the members of faculty by organizing value-addition programmes
            and providing placement opportunities to students. It acts as one of the major
            interfaces with the corporate sector and helps in developing the industry-academia inter-relationship.</p>
        </div>
        <div className='para'>
          <p><b>Training : </b>The Cell organizes certain orientation programmes, grooming sessions, mock interview sessions for students of each
            stream. Besides, the Cell organizes various summer internship programmes for students to provide them with hands-on experience and
            introducing them to the professional environment.</p>
        </div>
        <div className='para'>
          <p><b>Student Exchange:</b> The Institute signed an MOU with New Jersey Institute of Technology (NJIT), NJ, USA for a student exchange programme under
            which the first batch of 20 students had a 6-week training programme at NJIT during 2008 and the second batch of students are also undergoing
            training programme at present.</p>
        </div>
        <div className='para'>
          <p><b>Placement :</b> The Cell continuously co-ordinates with various industries and organizations for placement of its students. It has already
            successfully placed a high percentage of students in industry. It actively obtains feedback from organization and conveys it to respective
            departments which, in turn, train students accordingly, thereby increasing their hit ratio.</p>
        </div>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"></li>
        </ol>
        <div className="carousel-inner bg">
          <div className="carousel-item active">
            <img src={pic1} className="d-block w-100 img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic2} className="d-block w-100 img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic3} className="d-block w-100 img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic4} className="d-block w-100 img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic5} className="d-block w-100 img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic6} className="d-block w-100 img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic7} className="d-block w-100 img" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="heading">
          <h3><b>*Microsoft with Highest Package: 16.00 Lacs/annum</b></h3>
          <h5>Some of the best-of-the-industries in which students have been placed through campus interview are listed below.</h5>
        </div>
        <div className="com">
          <div className="list">
            <div className="list1">
              <ul>
                <li>Accenture Services Pvt. Ltd.</li>
                <li>Wipro Technologies Ltd.</li>
                <li>ICICI Bank Ltd.</li>
                <li>Capgemini India Pvt. Ltd.</li>
                <li>Tata Consultancy Services Ltd.</li>
                <li>HCL Technologies Ltd.</li>
                <li>Cognizant Technologies Solutions</li>
                <li>IBM Global Services India Pvt. Ltd.</li>
                <li>KPIT Cummins Infosystems Ltd</li>
                <li>ICICI Bank Ltd.</li>
                <li>Infosys Technologies Ltd.</li>
                <li>Larsen &amp; Toubro Infotech Ltd.</li>
                <li>Apollo Tyres Ltd.</li>
                <li>Haldia Petro Chemicals Ltd.</li>
                <li>Microsoft Corporation.</li>
                <li>IDBI Bank Ltd.</li>
                <li>DIC India Ltd.</li>
                <li>HSBC Securities Ltd.</li>
                <li>Reliance Infocomm Ltd.</li>
                <li>Tata Chemicals Ltd.</li>
              </ul>
            </div>
            <div className="list1">
              <ul>
                <li>Accenture Services Pvt. Ltd.</li>
                <li>Wipro Technologies Ltd.</li>
                <li>ICICI Bank Ltd.</li>
                <li>Capgemini India Pvt. Ltd.</li>
                <li>Tata Consultancy Services Ltd.</li>
                <li>HCL Technologies Ltd.</li>
                <li>Cognizant Technologies Solutions</li>
                <li>IBM Global Services India Pvt. Ltd.</li>
                <li>KPIT Cummins Infosystems Ltd</li>
                <li>ICICI Bank Ltd.</li>
                <li>Infosys Technologies Ltd.</li>
                <li>Larsen &amp; Toubro Infotech Ltd.</li>
                <li>Apollo Tyres Ltd.</li>
                <li>Haldia Petro Chemicals Ltd.</li>
                <li>Microsoft Corporation.</li>
                <li>IDBI Bank Ltd.</li>
                <li>DIC India Ltd.</li>
                <li>HSBC Securities Ltd.</li>
                <li>Reliance Infocomm Ltd.</li>
                <li>Tata Chemicals Ltd.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>








    </>
  )
}

export default NewRec
