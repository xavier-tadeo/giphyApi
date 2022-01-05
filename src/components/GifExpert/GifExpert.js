import React, { useState } from "react";
import { AddCategory } from "../AddCategory/AddCategory";
import { GifGrid } from "../GifGrid/GifGrid";
import "./GifExpert.scss";

export const GifExpert = () => {
  const arrayCategories = ["Dragon ball"];

  const [categories, setCategories] = useState(arrayCategories);

  // const handleAdd = () => {
  //    setCategories([...categories, "Barret de palla"]);
  // setCategories((categories) => [...categories, "Barret"]);
  // };
  return (
    <div className="list">
      <AddCategory setCategories={setCategories} />
      <ol className="list__container">
        {categories.map((categorie) => {
          return <GifGrid categorie={categorie} key={categorie} />;
        })}
      </ol>
    </div>
  );
};
