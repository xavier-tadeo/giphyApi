import React, { useEffect, useState } from "react";

export const GifGrid = ({ categorie }) => {
  const [images, setImages] = useState([]);

  const getGif = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=dragon+ball&limit=10&api_key=z3bZoUQrp7F5qjY3Xr5MUVKBEJZsikUw";
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        img: img.images.downsized_medium.url,
        title: img.title,
      };
    });
    console.log(gifs);
    setImages(gifs);
  };

  useEffect(() => {
    getGif();
  }, []);

  return (
    <>
      <li>{categorie}</li>
      {images.map(({ id, img, title }) => {
        return (
          <>
            <ol key={id}>{title}</ol>
            <img src={img} alt="se" />
          </>
        );
      })}
    </>
  );
};
