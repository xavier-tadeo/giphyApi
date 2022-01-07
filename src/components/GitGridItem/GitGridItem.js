import React from "react";
import "./GitGridItem.scss";

export const GitGridItem = ({ id, img, title }) => {
  return (
    <div className="card">
      <p className="card__title">{title}</p>
      <img className="card__image" src={img} alt={title} />
    </div>
  );
};
