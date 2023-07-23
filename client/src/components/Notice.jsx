import React from "react";
import './Notice.css';
import { NavLink } from "react-router-dom";

const n1 = './images/notice1.avif'
const n2 = './images/notice4.avif'
const n3 = './images/notice3.avif'

const Notice = () => {
    return (
        <>
            <div className="mynotice">
                <div className="mynotice-box">
                    <div className="box-top">
                        <img src={n1} alt={n1} height={'100px'} width={'200px'}></img>
                    </div>
                    <div className="box-down">
                        <div className="box-title">
                            <h3>Notice</h3>
                        </div>
                        <div className="box-body">

                            {/* <marquee behavior="scroll" direction="up" scrollamount="1"> */}
                            <ul>
                                <li> <span> Notice for payment of ODD Semester Fees ( A.Y. 2023 - 2024)</span><NavLink to="https://www.heritageit.edu/NoticePDF/1506645510Not05072023.pdf"
                                    target="_blank"><span>click here</span></NavLink> <p>Published on :05-07-2023 </p>
                                </li>
                                <li> <span> 	Notice regarding SVMCM Scholarship Applicants</span><NavLink to="https://www.heritageit.edu/NoticePDF/600820913scan0171.pdf"
                                    target="_blank"><span>click here</span></NavLink> <p>Published on :30-06-2023</p>
                                </li>
                                <li> <span> Notice for PPR (B.Tech 4th, 6th & 8th), (M.Tech 2nd) and (MCA 4th)</span><NavLink to="https://www.heritageit.edu/NoticePDF/1129940104Not28062023.pdf"
                                    target="_blank"><span>click here</span></NavLink> <p>Published on :28-06-2023 </p>
                                </li>
                                <li> <span>Notice for Publication of Results (B.Tech 4th, 6th & 8th), (M.Tech 2nd & 4th) (MCA 4th)</span><NavLink to="https://www.heritageit.edu/NoticePDF/1256590112Not270623.pdf"
                                    target="_blank"><span>click here</span></NavLink> <p>Published on :27-06-2023</p>
                                </li>
                                <li> <span>Time Table for 2nd Semester Examinations 2023</span><NavLink to="https://www.heritageit.edu/NoticePDF/1760916776Not25_05_2023.pdf"
                                    target="_blank"><span>click here</span></NavLink> <p>Published on :25-05-2023 </p>
                                </li>
                                <li> <span>Notice for 2nd semester (B.Tech & MCA), 2023 form fill up</span><NavLink to="https://www.heritageit.edu/NoticePDF/1098425494Not110523.pdf"
                                    target="_blank"><span>click here</span></NavLink> <p>Published on :11-05-2023 </p>
                                </li>
                                <li> <span>Notice for Publication of PPR Result (B.Tech & MCA - 1st Sem) and Hons. Papers (B.Tech 3rd, 5th & 7th Sem)</span><NavLink to="https://www.heritageit.edu/NoticePDF/975070749Not08052023.pdf"
                                    target="_blank"><span>click here</span></NavLink> <p>Published on :08-05-2023 </p>
                                </li>
                                <li> <span>Notice regarding online theory classes from 18th - 21st April 2023</span><NavLink to="https://www.heritageit.edu/NoticePDF/923686530Not170423.pdf"
                                    target="_blank"><span>click here</span></NavLink> <p>Published on :17-04-2023 </p>
                                </li>
                                <li> <span>Notice regarding heat wave</span><NavLink to="https://www.heritageit.edu/NoticePDF/180539441Not160423.pdf"
                                    target="_blank"><span>click here</span></NavLink> <p>Published on :16-04-2023 </p>
                                </li>
                                <li> <span>Even Semester Examinations 2023 Time Table for B.TECH (4th, 6th & 8th), M.Tech (2nd) AND MCA (4th) Semester</span><NavLink to="https://www.heritageit.edu/NoticePDF/2130579356Not170423.pdf"
                                    target="_blank"><span>click here</span></NavLink> <p>Published on :10-04-2023 </p>
                                </li>

                                <li> <span>Notice for payment of Even Semester Fees (A.Y. 2022-2023)
                                    to view notice-</span><NavLink to="https://www.heritageit.edu/NoticePDF/792710245Not30122022.pdf"
                                        target="_blank"><span>click here</span></NavLink> <p>Published on :
                                            30-12-2022</p>
                                </li>

                                <li><span>Semester Break Winter Recess 2022-2023 for studentsto view notice-</span>
                                    <NavLink to="https://www.heritageit.edu/NoticePDF/262778743Not231222.pdf" target="_blank"><span>click
                                        here</span></NavLink><p>Published on : 23-12-2022</p>
                                </li>

                                <li><span>Notice reg. Inter-Semester Break to view notice-</span><NavLink
                                    to="https://www.heritageit.edu/NoticePDF/2036503899Not15122022.pdf" target="_blank"><span>click
                                        here</span></NavLink><p>Published on :
                                            15-12-2022</p>
                                </li>

                                <li><span>Notice regarding Graduation Ceremony 2022 to view notice</span><NavLink
                                    to="https://www.heritageit.edu/NoticePDF/1720734485GraduationCeremony2022.pdf"
                                    target="_blank"><span>click here</span></NavLink><p>Published on :
                                        07-12-2022</p>
                                </li>

                                <li><span>Notice regarding B.Tech & MCA 1st sem class test time table to view notice</span><NavLink
                                    to="https://www.heritageit.edu/NoticePDF/1499580521ClassTest_1stSemBTechAndMCA22.pdf"
                                    target="_blank"><span>click here</span></NavLink><p>Published on :
                                        02-12-2022</p>
                                </li>

                            </ul>

                            {/* </marquee> */}
                        </div>
                    </div>
                </div>
                <div className="mynotice-box">
                    <div className="box-top">
                        <img src={n2} alt={n2} height={'100px'} width={'200px'}></img>
                    </div>
                    <div className="box-down">
                        <div className="box-title">
                            <h3>Announcements</h3>
                        </div>
                        <div className="box-body">
                        {/* eslint-disable-next-line */}
                            <marquee behavior="scroll" direction="up" scrollamount="5">
                                <ul >
                                    <li><span>OUTSTANDING ACHIEVEMENT OF CIVIL ENGINEERING STUDENTS at WEST EBNAGL ENGINEERING SERVICES conducted by PUBLIC SERVICE COMISSION</span>
                                        <p>published on 14-12-2021</p>
                                    </li>
                                    <li><span>Heritage Institute of Technology is once again ranked as No. 1 Private Engineering College in West Bengal</span>
                                        <p> published on 18-06-2021</p>
                                    </li>
                                    <li><span>PhD in Nano Engineering from University of California, San Diego on 15th December 2020</span>
                                        <p>published on 17-12-2020</p>
                                    </li>

                                    <li><span>Abhik Mitra, an anumnus of HITK, B.Tech-IT,Batch-2011 for joining Facebook as NavLink software
                                        Engineer recently from october 2020</span>
                                        <p >publishedon 15-12-2020</p>
                                    </li>

                                    <li><span>Chandra Mouli Pandey, NavLink student of HITK, B.Tech-EE Batch-2017 joined as Associate Manager
                                        ,Reserve Bank Information Technology Pvt Ltd</span>
                                        <p>published on 15-12-2020</p>

                                    </li>
                                    <li><span>Rotaract Club of Heritage Institute of Technology has been felicitated with 11 awards at the District Conference 2020</span>
                                        <p>published on 01-03-2020</p>
                                    </li>
                                    <li><span>Proud to state the student project on '3D Printed Artificial Beehive' made by Department of Mechanical Engineering</span>
                                        <p> published on 29-02-2020</p>
                                    </li>
                                    <li><span>The second industry supported lab for Embedded Systems at our dept. after IIoT</span>
                                        <p>published on 13-09-2019</p>
                                    </li>
                                    <li><span>Abhishek Biswas , a student of 3rd Year CSE won 2 bronze medals.</span>
                                        <p>published on 02-07-2019</p>
                                    </li>
                                    <li><span>Pride of ECE Department of HIT - Saurabh Suman Yadav, 2010 pass-out</span>
                                        <p>published on 11-04-2019</p>
                                    </li>
                                    <li><span>Ms. Sayantika Ghosh, 4th year B.Tech (Bio - Technology) student of Heritage Institute of Technology has ranked 1st in the All India Rank in the Graduate Aptitude Test in Engineering (GATE) 2019</span>
                                        <p> published on 20-03-2019</p>
                                    </li>
                                    <li><span>Achievement of our students in NASA Space APP Challenge Final</span>
                                        <p> published on 25-10-2018</p>
                                    </li>
                                    <li><span>Heritage Institute of Technology is awarded as the college with the Best Internship Record - East Zone on August 25, 2018</span>
                                        <p> published on 27-08-2018</p>
                                    </li>
                                </ul>
                            </marquee>
                        </div>
                    </div>
                </div>
                <div className="mynotice-box">
                    <div className="box-top">
                        <img src={n3} alt={n3} height={'100px'} width={'200px'}></img>
                    </div>
                    <div className="box-down">
                        <div className="box-title">
                            <h3>Events</h3>
                        </div>
                        <div className="box-body">
                        {/* eslint-disable-next-line */}
                            <marquee behavior="scroll" direction="up" scrollamount="5">
                                <ul>
                                    <li><span>	Invitation to attend the event 'Build-a-Bot 101' on Wednesday, June 01, 2022</span>
                                        <span>published on 31-05-2023</span>
                                        <NavLink to="" target="_blank"><span>view event</span></NavLink>
                                        <p>Event date: 01-06-2023 to 01-06-2023</p>
                                    </li>
                                    <li><span>Student paper competition on 'ROBOTICS IN HEALTHCARE'</span>
                                        <span>published on 30-05-2023</span>
                                        <NavLink to="" target="_blank"><span>view event</span></NavLink>
                                        <p>Event date: 	31-05-2023	to	31-05-2023</p>
                                    </li>
                                    <li><span>Celebration of World Intellectual Property Day</span>
                                        <span>published on 24-04-2023</span>
                                        <NavLink to="" target="_blank"><span>view event</span></NavLink>
                                        <p>Event date: 26-04-2023	to	26-04-2023</p>
                                    </li>
                                    <li><span>Annual students'  event ChEMSPARK '23 to be organized by Department of Chemical Engineering, HITK</span>
                                        <span>published on 24-03-2023</span>
                                        <NavLink to="" target="_blank"><span>view event</span></NavLink>
                                        <p>Event date: 21-04-2023	to	21-03-2023</p>
                                    </li>
                                    <li><span>	Invitation to attend Robotics Workshop 'The Balancing Act' to be held on February 23, 2023</span>
                                        <span>published on 22-03-2023</span>
                                        <NavLink to="" target="_blank"><span>view event</span></NavLink>
                                        <p>Event date: 	23-02-2023	to	16-02-2023</p>
                                    </li>
                                    <li><span>Invitation for National Science Day Celebration</span>
                                        <span>published on 22-03-2023</span>
                                        <NavLink to="" target="_blank"><span>view event</span></NavLink>
                                        <p>Event date: 28-03-2023	to	28-03-2023</p>
                                    </li>
                                    <li><span>	Industrial Site visit by Department of CE_21st and 23rd March, 2023</span>
                                        <span>published on 20-03-2023</span>
                                        <NavLink to="" target="_blank"><span>view event</span></NavLink>
                                        <p>Event date: 	21-03-2023	to	23-03-2023</p>
                                    </li>
                                    <li><span>INDUSTRY VISIT AT " EVEREADY INDUSTRIES LTD , TARATOLA " ON 18TH MARCH 2023 ( SATURDAY)</span>
                                        <span>published on 17-03-2023</span>
                                        <NavLink to="" target="_blank"><span>view event</span></NavLink>
                                        <p>Event date: 18-03-2023	to	18-03-2023</p>
                                    </li>
                                    <li><span>SPORTS WEEK CELEBRATION</span>
                                        <span>published on 10-03-2023</span>
                                        <NavLink to="" target="_blank"><span>view event</span></NavLink>
                                        <p>Event date: 	13-03-2023	to	17-03-2023</p>
                                    </li>
                                    <li><span>	Invitation to participate in International Women's Day Celebration</span>
                                        <span>published on 06-03-2023</span>
                                        <NavLink to="" target="_blank"><span>view event</span></NavLink>
                                        <p>Event date: 	08-03-2023	to	08-03-2023</p>
                                    </li>


                                    <li><span>Invition to Talk on the occasion of National Mathematics Day</span>
                                        <span>published on 21-12-2022</span>
                                        <NavLink to="" target="_blank"><span>view event</span></NavLink>
                                        <p>Event date: 22-12-2022 to 22-12-2022</p>
                                    </li>

                                    <li><span>Invition to attend National Polution Control day</span>
                                        <span>published on 01-12-2022</span>
                                        <NavLink to="" target="_blank"><span>view event</span></NavLink>
                                        <p>Event date: 02-12-2022 to 02-12-2022</p>
                                    </li>

                                </ul>
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Notice
