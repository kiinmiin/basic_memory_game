import React from "react";
import "./Card.css";

const Card = ({ card, handleClick, flipped }) => {
  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => handleClick(card)}>
      <div className="card-inner">
        {/* Back Side */}
        <div className="outline-image" />

        {/* Front Side */}
        <img
          className="card-image"
          src={card.image}
          alt={card.name}
        />
      </div>
    </div>
  );
};

export default Card;
