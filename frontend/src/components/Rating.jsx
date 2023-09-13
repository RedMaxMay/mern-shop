import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text, color }) => {
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(<FaStar key={i} />);
    } else if (i - 0.5 === value) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return (
    <div className="rating">
      <span>{stars[0]}</span>
      <span>{stars[1]}</span>
      <span>{stars[2]}</span>
      <span>{stars[3]}</span>
      <span>{stars[4]}</span>
      <span className="rating-text">{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

export default Rating;
