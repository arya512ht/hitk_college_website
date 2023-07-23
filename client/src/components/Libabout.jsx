import React from 'react'
import Quicklinks from './Quicklinks';
const x={
  fontFamily:"Arial",textAlign:"justify",fontSize:"15.3px",color:"rgb(32, 9, 9)"
}
const y = {
  color: "blue",
  fontSize: "30px",
  margin: "3px",
};

export default function Libabout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <p style={y}>
            <b>About Library</b>
          </p>
          <p style={x}>
            <b>
              Central Library of the Heritage Institute of Technology, Kolkata
              (HITK), is the nerve center for all academic activities of the
              Institute.
            </b>{" "}
            It is situated in the Central Building, spreading over approximately
            20,000 sq feet. The library is centrally air-conditioned and
            equipped with computers and communication network and has a seating
            capacity of 250 readers. This is equipped with CCTV, Antitheft
            Solution system and also with Wi-Fi connectivity. The library is
            fully computerized with LIBSYS library management software, with
            barcode technology. OPAC/WEB-OPAC facilities are available through
            the campus network and outside the campus. It is fully automated and
            is one of the most modern Engineering College libraries in West
            Bengal. HITK library comprises Departmental Libraries and also a
            fully equipped Digital Library.
          </p>
        </div>
        <div className="col-md-4">
          <Quicklinks/>
        </div>
      </div>
    </div>
  );
}
