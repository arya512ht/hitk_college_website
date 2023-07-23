import "./FooterStyles.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="top">
                    <div>
                        <h1>HIT Kolkata</h1>
                        <h6>Unlock Your Potential, Ignite Your Future : Empowering Minds</h6>
                    </div>
                    <div>
                        <NavLink to="https://www.facebook.com/Heritageit/">
                            <i className="fa-brands fa-facebook-square"></i>
                        </NavLink>
                        <NavLink to="/">
                            <i className="fa-brands fa-twitter-square"></i>
                        </NavLink>
                        <NavLink to="https://www.linkedin.com/school/heritage-institute-of-technology/">
                            <i className="fa-brands fa-linkedin"></i>
                        </NavLink>
                        <NavLink to="https://www.youtube.com/@TheHeritageGroupofInstitutions">
                            <i className="fa-brands fa-youtube-square"></i>
                        </NavLink>
                    </div>
                </div>

                <div className="bottom">
                    <div>
                        <h4>Other Heritage Group Institutions</h4>
                        <NavLink to="https://www.theheritageschool.org/index.php">- The Heritage School</NavLink>
                        <NavLink to="/">- Heritage Business School</NavLink>
                        <NavLink to="/">- The Heritage Academy </NavLink>
                        <NavLink to="https://www.hlc.edu.in/">- Heritage Law College</NavLink>
                        <NavLink to="https://www.thc.edu.in/">- The Heritage College</NavLink>
                    </div>
                    <div>
                        <h4>Downloads</h4>
                        <NavLink to="https://www.heritageit.edu/NoticePDF/596357021HITHolidayList2023.pdf">Holiday List 2023</NavLink>
                        <NavLink to="https://www.heritageit.edu/PDF/Informtion_Brochure_2022.pdf">Information Brochures</NavLink>
                        <NavLink to="https://www.heritageit.edu/PDF/AcademicCalendar2022-2023.pdf">Academic Calendar 2022-2023</NavLink>
                        <NavLink to="https://www.heritageit.edu/PDF/AntiRaggingWarning.pdf">Anti-Ragging Warning</NavLink>
                        <NavLink to="https://www.heritageit.edu/PDF/HIT-Application-Form.doc">Recruitment Form</NavLink>
                    </div>
                    <div>
                        <h4>Help</h4>
                        <NavLink to="/">Enquiry</NavLink>
                        <NavLink to="/">Feedback</NavLink>
                        <NavLink to="/">Tender</NavLink>
                        <NavLink to="/">Jobs</NavLink>
                    </div>
                    <div>
                        <h4>Others</h4>
                        <NavLink to="/">Terms of Service</NavLink>
                        <NavLink to="/">Privacy Policy</NavLink>
                        <NavLink to="/">License</NavLink>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright © 2023, Heritage Institute of Technology, All right reserved.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
