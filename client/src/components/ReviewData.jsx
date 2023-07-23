import "./ReviewStyles.css";

function ReviewData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="review" />
      </div>
      <div className="text-center"><h4>{props.heading}</h4></div>
      <p>{props.text}</p>
    </div>
  );
}

export default ReviewData;
