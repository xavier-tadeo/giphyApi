import React from "react";
import "./GitGridItem.scss";

export const GitGridItem = ({ id, img, title }) => {
  return (
    <div className="card animate__animated animate__zoomInDown">
      <p className="card__title">{title}</p>
      <img className="card__image" src={img} alt={title} />
    </div>
  );
};
