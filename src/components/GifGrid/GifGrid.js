import React from "react";

import { useFetchGif } from "../../hooks/useFetchGif";
import { GitGridItem } from "../GitGridItem/GitGridItem";

export const GifGrid = ({ categorie }) => {
  const { data, loading } = useFetchGif(categorie);

  return (
    <>
      <li>{categorie}</li>
      {loading && <p>"Loading..."</p>}
      {data.map((image) => (
        <GitGridItem key={image.id} {...image} />
      ))}
    </>
  );
};
