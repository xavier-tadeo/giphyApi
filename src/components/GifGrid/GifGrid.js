import React from "react";
import PropType from "prop-types";
import { useFetchGif } from "../../hooks/useFetchGif";
import { GitGridItem } from "../GitGridItem/GitGridItem";
import "./GifGrid.scss";

export const GifGrid = ({ categorie }) => {
  const { data, loading } = useFetchGif(categorie);

  return (
    <>
      <li className="animate__animated animate__bounce">{categorie}</li>
      <div className="container__card">
        {loading && (
          <p className="animate__animated animate__flash">"Loading..."</p>
        )}
        {data.map((image) => (
          <GitGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propType = {
  categorie: PropType.string.isRequired,
};
