import React from "react";
import "./GifExpert.scss";

export const GifExpert = () => {
  return (
    <>
      {" "}
      <div className="gif">
        <img
          src="https://media.giphy.com/media/19JSJ5ucu91R5D7a3w/giphy.gif"
          alt="Imagen goku balldragon"
          className="gif__gif-goku balldragon"
        />
        <img
          src="https://media.giphy.com/media/cb9aF9tDyiRkYbz3BX/giphy.gif"
          alt="Imagen goku balldragon"
          className="gif__gif-vegetta balldragon"
        />
        <div className="gif__container">
          <h2 className="gif__title">Gif Expert</h2>
          <hr className="gif__line" />
        </div>
        <h3 className="gif__author">by Xavier Tadeoo</h3>
      </div>
    </>
  );
};
