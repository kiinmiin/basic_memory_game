import React from "react";
import "./Card.css";

const Card = ({ card, handleClick, flipped }) => {
  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => handleClick(card)}>
      <div className="card-inner">
        {/* Taga pool */}
        <div className="outline-image" />

        {/* Ees pool */}
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
