import React from 'react';
import './Knowstyle.css';

function Know() {
  return (
    <section className="section1">
      <div className="container1">
        <div className="card front-face">
          <header>
            <span className="logo">
              <img src="images/hlogo.png" alt="hlogo" />
              <h5>Heritage Institute of Technology, Kolkata</h5>
            </span>
            <img src="images/chip.png" alt="chip" className="chip" />
          </header>

          <div className="card-details">
            <div className="name-number">
              <h6>Autonomy Roll Number</h6>
              <h5 className="number">12620001030</h5>
              <h5 className="name">Arya Das</h5>
            </div>

            <div className="valid-date">
              <h6>Batch</h6>
              <h5>2020-2024</h5>
            </div>
          </div>
        </div>

        <div className="card back-face">
          <h6>
            For customer service call +91 33 6627 0600 or email at
            admin@heritageit.edu
          </h6>
          <span className="magnetic-strip">
            <h7>arya.das.cse24@heritageit.edu.in</h7>
          </span>
          <div className="signature">
            <i>2051196</i>
          </div>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            maiores sed doloremque nesciunt neque beatae voluptatibus doloribus.
            Libero et quis magni magnam nihil temporibus? Facere consectetur
            dolore reiciendis et veniam.
          </h5>
        </div>
      </div>
    </section>
  );
}

export default Know;


