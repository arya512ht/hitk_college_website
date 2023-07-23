import React from 'react'
import pic1 from '../img/Campus2.jpg'
import pic2 from '../img/placement.jpg'
import './Cell.css'


function Cell() {
  return (
    <div className="about-us">
     
        
            <div className="about-col">
                <h1>TPO Cell</h1>
                <p>Training & Placement Cell compliments the efforts of the members of faculty by organizing
                     value-addition programmes and providing placement opportunities to students. 
                     It acts as one of the major interfaces with the corporate sector and helps in developing 
                     the industry-academia inter-relationship.</p>
            </div>
            
            <div className="about-col">
                <img src={pic1} alt='pic1'/>

            </div>
            <div className="about-col">
            <h1>On Campus Companies</h1>
            <p>Training and Placement are very active to ensure a continuous dialogue with the Corporates 
                so as to follow up with them on their recruitment drive and ensure that we get the best recruiters 
                to come to our campus as the number one slot and take the cream of the recruits. 
                Efforts are on through out the year for recruitments, and every endeavour is made to 
                build new relationships and broaden our base of recruiters.</p>
        </div>
        <div className="about-col">
            <img src={pic2} alt='pic2'/>
        </div>
        
    
    </div>
  )
}

export default Cell
