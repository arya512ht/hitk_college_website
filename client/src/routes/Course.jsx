import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero"
import "../components/Course.css";

const c2 = '/images/course1.avif'
const c3 = '/images/course3.avif'

function mycourse() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg="images/course0.avif"
        title="course"

      />

      <div className="mycourse">

        <div className="mycourse-body">
          <div className="mycourse-body-left">
            <img src={c2} alt={c2} height={'400px'} width={'100%'}></img>
          </div>
          <div className="mycourse-body-right">
            <div className="mycourse-title"><h3>Undergraduate Programmes (B.Tech)</h3></div>
            <div className="mycourse-inner-body">
              <div className="mycourse-box1"><p>Applied Electronics & Instrumentation Engineering (AEIE)</p>
              </div>
              <div className="mycourse-box1"><p>Biotechnology (BT)</p>
              </div>
              <div className="mycourse-box1"><p>Chemical Engineering (ChE)</p>
              </div>
              <div className="mycourse-box1"><p> Civil Engineering (CE)</p>
              </div>
              <div className="mycourse-box1"><p> Computer Science & Engineering (CSE)</p>
              </div>
              <div className="mycourse-box1"><p> Electrical Engineering (EE)</p>
              </div>
              <div className="mycourse-box1"><p>Electronics & Communication Engineering (ECE)</p>
              </div>
              <div className="mycourse-box1"><p> Information Technology (IT)</p>
              </div>
              <div className="mycourse-box1"><p>Mechanical Engineering (ME)</p>
              </div>
              <div className="mycourse-box1"><p> Computer Science and Business Systems (CSBS)</p>
              </div>
              <div className="mycourse-box1"><p>CSE (Artificial Intelligence
                and Machine Learning) (CSE - AI & ML)</p>
              </div>
              <div className="mycourse-box1"><p>CSE (Data Science)
                (CSE - D.Sc.)</p>
              </div>
              <div className="mycourse-box1"><p>CSE(IoT & Cyber Security
                including Block Chain Technology)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mycourse-body">

          <div className="mycourse-body-left">
            <img src={c3} alt={c3} height={'400px'} width={'100%'}></img>
          </div>
          <div className="mycourse-body-right">
            <div className="mycourse-title"><h3>Postgraduate Programmes (M.Tech)</h3></div>
            <div className="mycourse-inner-body">
              <div className="mycourse-box1"><p>
                Applied Electronics & Instrumentation Engineering</p>
              </div>
              <div className="mycourse-box1"><p>Biotechnology</p>
              </div>
              <div className="mycourse-box1"><p>
                Computer Science & Engineering</p>
              </div>
              <div className="mycourse-box1"><p>
                Electronics & Communication Engineering</p>
              </div>
              <div className="mycourse-box1"><p>VLSI</p>
              </div>
              <div className="mycourse-box1"><p>
                Master of Computer Application</p>
              </div>
              <div className="mycourse-box1"><p>
                Renewable Energy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default mycourse;