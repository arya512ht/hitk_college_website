import React from 'react';
import './Knowstyle.css';
import { useLocation } from 'react-router-dom';

function Know() {
  const location = useLocation();
  const userData = location.state?.user;

  const getYearFromDate = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  return (

    <section className="section1">
      <div className="container1">
        <div className="card front-face">
          <header>
            <span className="logo">
              <img src="images/hlogo.png" alt="hlogo" />
              <h5 style={{marginRight:"10px"}}>Heritage Institute of Technology, Kolkata</h5>
            </span>
            <img src={`http://localhost:8000/uploads/${userData.image}`}
              alt='User Profile' className="chip" />
          </header>

          <div className="card-details">
            <div className="name-number">
              <h6>Roll Number:</h6>
              <h5 className="number">{userData.roll}</h5>
              <h6>Student's Name:</h6>
              <h5 className="number">{userData.name}</h5>

            </div>

            <div className="valid-date">
              <h6>Course:</h6>
              <h5>{userData.course}</h5>
              <h6>Department:</h6>
              <h5>{userData.department}</h5>
            </div>
          </div>
        </div>

        <div className="card back-face">
          <h6>
            Call +91 33 6627 0600 or Email at admin@heritageit.edu
          </h6>
          <span className="magnetic-strip">
            <h7>{userData.email}</h7>
          </span>
          <div className="signature">
            <i>{getYearFromDate(userData.adate)}</i>
          </div>
          <h5>
            Address : {userData.street}, {userData.post},{' '}
            {userData.police}, {userData.dist}, {userData.state} -{' '}
            {userData.pin}
          </h5>
        </div>
      </div>
    </section>
  );
}

export default Know;


