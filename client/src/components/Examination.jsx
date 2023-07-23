import React, { useState } from "react";
import Exam from "./Exam";
import { NavLink } from "react-router-dom";

const x = {
  color: "red",
  marginTop: "20px",
};

const y = {
  border: "2px solid black",

};

const k = {
  textAlign: "center",
  borderRight: "2px solid black",
  borderBottom: "2px solid black",
}

const m = {
  fontSize: "18.3px",
}
const n = {
  textDecoration: "none",
  color: "black"
}
const Canteen = () => {
  const [data] = useState(Exam);

  return (
    <div>
      <figure className="text-center">
        <blockquote className="blockquote">
          <h1 style={x}>
            <u>EXAMINATION</u>
          </h1>
        </blockquote>
      </figure>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-8">
            <table style={y} className="table table-bordered ">
              <thead className="table-warning">
                <tr style={m}>
                  <th style={k} colSpan="4" scope="col">
                    <u>Examination Rules -</u>
                  </th>
                  <th style={k} colSpan="3" scope="col">
                  <NavLink
                          style={n}
                          to="https://www.heritageit.edu/NoticePDF/Exam_Rules.pdf"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Click Here
                        </NavLink>
                  </th>
                </tr>
                <tr style={m}>
                  <th style={k} colSpan="4" scope="col">
                    <u>Degree certificate collection process-  -</u>
                  </th>
                  <th style={k} colSpan="3" scope="col">
                  <NavLink
                          style={n}
                          to="https://www.heritageit.edu/PDF/Degree%20Certificate%20Collection%20Process.pdf"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Click Here
                        </NavLink>
                  </th>
                </tr>
                <tr style={m}>
                  <th style={k} colSpan="4" scope="col">
                    <u>Application for transcripts- -</u>
                  </th>
                  <th style={k} colSpan="3" scope="col">
                  <NavLink
                          style={n}
                          to="https://www.heritageit.edu/PDF/Application%20for%20Transcript.pdf"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Click Here
                        </NavLink>
                  </th>
                </tr>
                <tr style={m}>
                  <th style={k} colSpan="4" scope="col">
                    <u>	Application for Duplicate Grade Card- -</u>
                  </th>
                  <th style={k} colSpan="3" scope="col">
                  <NavLink
                          style={n}
                          to="https://www.heritageit.edu/PDF/Application%20for%20Duplicate%20Grade%20Card.pdf"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Click Here
                        </NavLink>
                  </th>
                </tr>
                <tr style={m}>
                  <th style={k} colSpan="4" scope="col">
                    <u>	Credit Transfer -</u>
                  </th>
                  <th style={k} colSpan="3" scope="col">
                  <NavLink
                          style={n}
                          to="https://www.heritageit.edu/NoticePDF/309527862CreditTransferHITK.pdf"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Click Here
                        </NavLink>
                  </th>
                </tr>
                <tr style={m}>
                  <th style={k} colSpan="4" scope="col">
                    <u>Semester Question Papers -</u>
                  </th>
                  <th style={k} colSpan="3" scope="col">
                  <NavLink
                          style={n}
                          to="/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Click Here
                        </NavLink>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-8">
            <table style={y} className="table table-bordered ">
              <thead className="table-warning">
                <tr style={m}>
                  <th style={k} colSpan="3" scope="col">
                    <u>Examination Cell Notice Board</u>
                  </th>
                  <th style={k} colSpan="3" scope="col">
                    <u>Links</u>
                  </th>
                </tr>
              </thead>
              {data.map((elem) => {
                const { date, notice, download } = elem;
                return (
                  <tbody>

                    <tr className="table-active">
                      <td style={k} colSpan="3">
                        <b>{date} :</b>
                      </td>
                      <td style={k}></td>
                    </tr>
                    <tr className="table-light">
                      <td style={k} colSpan="3">
                        {notice} -
                      </td>
                      <td style={k}>
                        <NavLink
                          style={n}
                          to={download}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Click Here
                        </NavLink>
                      </td>
                    </tr>
                  </tbody>
                );
              })}

            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canteen;
