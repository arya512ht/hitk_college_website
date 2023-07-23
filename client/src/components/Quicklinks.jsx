import React from 'react'
import { NavLink } from 'react-router-dom';

const listItemStyle = {
  listStyle: "none",
  margin: "0",
  padding: "0",
  marginBotton: "25px",
  display: "block",
};
const z = {
  color: "green",
  fontSize: "30px",
  margin: "3px",
  
};
const k = {
  textDecoration: "none",
  color: "black",
  fontSize: "16px",
  marginBottom: "20px"
};
export default function Quicklinks() {
  return (
    <div>
      <p style={z}>QUICK LINKS</p>
      <ul style={listItemStyle}>
        <li style={listItemStyle}>
          <b>1. </b>
          <NavLink style={k} to="https://nptel.ac.in/" target="noreferrer">
            NPTEL
          </NavLink>
        </li>

        <li style={listItemStyle}>
          <b>2. </b>
          <NavLink style={k} to="https://swayam.gov.in/" target="noreferrer">
            SWAYAM
          </NavLink>
        </li>
        <li style={listItemStyle}>
          <b>3. </b>
          <NavLink
            style={k}
            to="http://136.232.2.202:8380/opac/"
            target="noreferrer"
          >
            Web-OPAC
          </NavLink>
        </li>
        <li style={listItemStyle}>
          <b>4. </b>
          <NavLink
            style={k}
            to="https://epgp.inflibnet.ac.in/"
            target="noreferrer"
          >
            e-Pathshala
          </NavLink>
        </li>
        <li style={listItemStyle}>
          <b>5. </b>
          <NavLink
            style={k}
            to="https://egyankosh.ac.in/"
            target="noreferrer"
          >
            e-Gyankosh
          </NavLink>
        </li>
        <li style={listItemStyle}>
          <b>6. </b>
          <NavLink
            style={k}
            to="https://ndl.iitkgp.ac.in/"
            target="noreferrer"
          >
            National Digital Library of India
          </NavLink>
        </li>
      </ul>
    </div>

  )
}

