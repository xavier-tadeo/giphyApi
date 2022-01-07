import React from "react";

export const GitGridItem = ({ id, img, title }) => {
  console.log(id, title, img);
  return (
    <div>
      <p>{title}</p>
      <img src={img} alt={title} />
    </div>
  );
};
