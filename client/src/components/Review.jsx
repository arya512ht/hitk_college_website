import "./ReviewStyles.css";
import ReviewData from "./ReviewData";
import Review1 from "../assets/5.jpg";
import Review2 from "../assets/8.jpg";
import Review3 from "../assets/6.jpg";
import { NavLink } from "react-router-dom";

function Review() {
  return (
    <div className="review" >
      <h3><NavLink to="https://www.heritageit.edu/PDF/Informtion_Brochure_2022.pdf" target="_blank" style={{color:"black"}}>The Heritage Group</NavLink></h3>
      <h1>College Review</h1>
      <p>HITK offers a vibrant college experience preparing students for a successful future</p>
      <div className="reviewcard" >
        <ReviewData
          image={Review1}
          heading="Review From Guests"
          text="HITK fosters adynamic learning environment, with dedicated faculty and diverse opportunities for personal growth.
          The campus facilities are imperssive, and the supportive community makes HITK an exceptional choice for the higher education.
          The campus left me spellbound! With its enchanting architecture, vibrant atmosphere, and outstanding facilities, it's a place where 
          learning and creativity intertwine seamlessly. A truly captivating experience!"
        />
        <ReviewData
          image={Review2}
          heading="Review From Guests"
          text="The campus left me spellbound! Its enchanting beauty, coupled with a vibrant atmosphere, makes it a dream destination for
           students. The well-equipped facilities and passionate faculty add to the magic, creating an inspiring environment for learning.
            From engaging events to supportive peers, the campus offers a perfect blend of academics and personal growth. I couldn't have 
            asked for a more captivating college experience!"
        />
        <ReviewData
          image={Review3}
          heading="Review From Guests"
          text="This campus is absolutely mind-blowing! With breathtaking architecture, sprawling green spaces, and cutting-edge facilities, 
          it's a dream come true for any student. The vibrant atmosphere stimulates creativity and fosters a strong sense of community.
           Professors are top-notch and approachable, ensuring a fantastic learning experience. An unforgettable campus that leaves a lasting 
           impression on anyone who sets foot here."
        />
      </div>
     
      <h1>What Our Student Says</h1>
      <p>You can discover them from their own</p>
    </div>
    
  );
}

export default Review;
