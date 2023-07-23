import React from 'react'
import Tpo from '../img/tpo.jpg'
import './Placementoffice.css'
import Cell from "./Cell";
const placementoffice = () => {
  return (
    <>
    <div className='body'>
      <div className='left'>
        <img src={Tpo} alt='tpo'></img>
      </div>
      <div className='right'>
        <h5><b>Mr. Kaushik Bhattacharya : </b></h5>
        <span> 98300 07333 (Email : kaushik.bhattacharya@heritageit.edu)[ Head - Training & Placement ]</span>
        <h5><b>Contact Numbers: </b></h5>
        <span> T & P Cell / Fax Number : (033) 6627-0643 / (033) 2443-1565 (Direct)</span>




        <h5><b>Email:</b></h5>
        <span>placement@heritageit.edu,</span>
        <span> hitplacement@heritageit.edu</span>
      </div>
    </div>
    <Cell />
    </>
  )
}

export default placementoffice
