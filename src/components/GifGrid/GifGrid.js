import React from "react";

import { useFetchGif } from "../../hooks/useFetchGif";
import { GitGridItem } from "../GitGridItem/GitGridItem";
import "./GifGrid.scss";

export const GifGrid = ({ categorie }) => {
  const { data, loading } = useFetchGif(categorie);

  return (
    <>
      <li>{categorie}</li>
      <div className="container__card">
        {loading && <p>"Loading..."</p>}
        {data.map((image) => (
          <GitGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
