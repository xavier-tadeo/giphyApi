import React, { useState } from "react";
import { AddCategory } from "../AddCategory/AddCategory";

export const GifExpert = () => {
  const arrayCategories = ["Doraimon", "Arare", "DragonBall"];

  const [categories, setCategories] = useState(arrayCategories);

  const handleAdd = () => {
    // setCategories([...categories, "Barret de palla"]);
    setCategories((categories) => [...categories, "Barret"]);
  };
  return (
    <div className="list">
      <AddCategory />
      <ol>
        {categories.map((categorie) => {
          return <li key={categorie}>{categorie}</li>;
        })}
      </ol>
    </div>
  );
};
