import React from 'react'
import pic1 from '../assets/Logo HIT-page-001.jpg'
import './Mainbody.css'
import { Link } from 'react-router-dom'

const MainBody = () => {
  return (
    <div className='rbackground'>
      <div className='main'>
        <div className='image'>
          <img src={pic1} alt='hitres' />
        </div>
        <h1>Result of Even Semester Examination 2022-2023</h1>
        <h3>Please enter your Roll to check result.</h3>
        <div className='resform'>
          <form>

            <label>Autonomy Roll No: </label>
            <input type="text"></input>


            <label>Semester:</label>
            <select id="dropmenu" onchange="showInput()">

              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
            </select>

            <Link to="/"><button className='btn'>Submit</button></Link>
          </form>

        </div>
      </div>
    </div>
  )
}

export default MainBody;
