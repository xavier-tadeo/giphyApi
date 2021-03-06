import React from "react";
import "./GitGridItem.scss";
import PropTypes from "prop-types";

export const GitGridItem = ({ id, img, title }) => {
  return (
    <div className="card animate__animated animate__zoomInDown">
      <p className="card__title">{title}</p>
      <img className="card__image" src={img} alt={title} />
    </div>
  );
};

GitGridItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
