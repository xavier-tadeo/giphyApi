import React, { useState } from "react";

export const GifExpert = () => {
  const arrayCategories = ["Doraimon", "Arare", "DragonBall"];

  const [categories, setCategories] = useState(arrayCategories);

  const handleAdd = () => {
    // setCategories([...categories, "Barret de palla"]);
    setCategories((categories) => [...categories, "Barret"]);
  };
  return (
    <div className="list">
      <button onClick={handleAdd}>Added</button>
      <ol>
        {categories.map((categorie) => {
          return <li key={categorie}>{categorie}</li>;
        })}
      </ol>
    </div>
  );
};
