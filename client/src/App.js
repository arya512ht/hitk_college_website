import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Course from "./routes/Course";
import Gallery from "./routes/Gallery";
import Contact from "./routes/Contact";
import Admission from "./components/Admission";
import Sports from "./components/Sports";
import Onlinefacility from "./components/Onlinefacility";
import Payment from "./components/Payment";
import Canteen from "./components/Canteen";
import Library from "./components/Library";
import Placement from "./components/Placement";
import Result from "./components/Result";
import Examination from "./components/Examination";
import Placementoffice from "./components/Placementoffice";
import SummerTraining from "./components/SummerTraining";
import NewRec from "./components/NewRec";
import Aimsandobjectives from "./components/Aimsandobjectives";
import Services from "./components/Services";
import Collections from "./components/Collections"
import Digitallibrary from "./components/Digitallibrary";
import Libraryrules from "./components/Libraryrules";
import Functions from "./components/Functions";
import Otherlibraries from "./components/Otherlibraries";
import Recognition from "./components/Recognition";
import Overview from "./components/Overview";
import Qualitypolicy from "./components/Qualitypolicy";
import Internationalcolaboration from "./components/Internationalcolaboration";
import Vision from "./components/Vision";
import Message from "./components/Message";
import Boardoftrustee from "./components/Boardoftrustee";
import StudentLogin from "./components/StudentLogin";
import Classroutine from "./components/Classroutine";
import Adminloginform from "./components/Adminloginform";
import Know from "./components/Know";
// import UserDashboard from "./components/UserDashboard";
import CanteenPayment from "./components/CanteenPayment";
import EditStudent from "./components/EditStudent";

import Dashborad from "./components/Dashborad";
import Profile from "./components/Profile";
import PaymentVerify from "./components/PaymentVerify";
import StudentVerify from "./components/StudentVerify";

import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/onlinefacility" element={<Onlinefacility />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/canteen" element={<Canteen />} />
        <Route path="/library" element={<Library />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/result" element={<Result />} />
        <Route path="/Examination" element={<Examination />} />
        <Route path='/recuitment' element={<NewRec />}></Route>
        <Route path='/placementoffice' element={<Placementoffice />}></Route>
        <Route path='/summerTraining' element={<SummerTraining />}></Route>
        <Route path="/functions" element={<Functions />}></Route>
        <Route path="/aimsandobjectives" element={<Aimsandobjectives />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/collections" element={<Collections />}></Route>
        <Route path="/digitallibrary" element={<Digitallibrary />}></Route>
        <Route path="/libraryrules" element={<Libraryrules />}></Route>
        <Route path="/otherlibraries" element={<Otherlibraries />}></Route>
        <Route path='/Recognition' element={<Recognition />}></Route>
        <Route path='/Overview' element={<Overview />}></Route>
        <Route path='/Qualitypolicy' element={<Qualitypolicy />}></Route>
        <Route path='/Internationalcolaboration' element={<Internationalcolaboration />}></Route>
        <Route path='/Vision' element={<Vision />}></Route>
        <Route path='/Message' element={<Message />}></Route>
        <Route path='/Boardoftrustee' element={<Boardoftrustee />}></Route>
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/classroutine" element={<Classroutine />} />
        <Route path="/Adminloginform" element={<Adminloginform />}></Route>
        
        <Route path="/know" element={<Know />}></Route>
        {/* <Route path="/user-dashboard" element={<UserDashboard />} ></Route> */}
        <Route path="/ulogin" element={<StudentLogin />} ></Route>
        <Route path="/canteenpayment" element={<CanteenPayment />}/>
        <Route path="/EditStudent/:id" element={<EditStudent />} />



        <Route path="/StudentDashboard" element={<Dashborad/>}></Route>
        <Route path="/StudentDashboard/Profile" element={<Profile/>}></Route>
        <Route path="/StudentDashboard/Home" element={<Dashborad/>}></Route>
        <Route path="/PaymentVerify" element={<PaymentVerify />}></Route>
        <Route path="/StudentVerify" element={<StudentVerify />}></Route>
        <Route path="/Main" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;

