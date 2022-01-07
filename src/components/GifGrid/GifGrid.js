import React, { useEffect, useState } from "react";
import { getGif } from "../../helpers/getGif";
import { GitGridItem } from "../GitGridItem/GitGridItem";

export const GifGrid = ({ categorie }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGif(categorie).then((img) => setImages(img));
  }, [categorie]);

  return (
    <>
      <li>{categorie}</li>
      {images.map((image) => (
        <GitGridItem key={image.id} {...image} />
      ))}
    </>
  );
};
