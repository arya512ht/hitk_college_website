import "./HomeHeroStyles.css";
import { Link } from "react-router-dom";
function HomeHero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="heroImg" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Link className={props.btnClass} to={props.url}>
            {props.buttonText}
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
