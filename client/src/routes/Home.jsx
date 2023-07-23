import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero"
import Explore from "../components/Explore";
import Review from "../components/Review";
import Slider from "../components/Slider";
import Notice from "../components/Notice";

function Home() {
    return (
        <>
            <Navbar />
            <HomeHero
                cName="hero"
                heroImg="images\hitmain.jpg"
                title="Heritage Institute Of Technology Kolkata"
                text="Where learning is an interactive evolutionary process 
                An Autonomous Institution affiliated to MAKAUT, West Bengal 
                (Accredited with 'A' Grade by NAAC w.e.f. 12/07/2022)"
                btnClass="show"
                buttonText="Online Facilities"
                url="/onlinefacility"
            />
            <Notice />
            <Explore />
            <Review />
            <Slider />
            <Footer />
        </>
    );
}

export default Home;