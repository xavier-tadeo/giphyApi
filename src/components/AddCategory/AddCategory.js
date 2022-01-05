import React, { useState } from "react";
import "./AddCategory.scss";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("mas");

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setCategories((categories) => [...categories, inputValue]);
  };
  return (
    <div className="addcategory">
      <h3 className="addcategory__title">Added category</h3>
      <div className="addcategory__container-form">
        <img
          src="https://media.giphy.com/media/xTiTnwi8Azjnva46Fq/giphy.gif"
          alt="buu go out"
          className="addcategory__img"
        />
        <form className="addcategory__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="addcategory__input"
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
        <img
          src="https://media.giphy.com/media/ZNrjpRCSKbQPe/giphy.gif"
          alt="buu talking"
          className="addcategory__img"
        />
      </div>
    </div>
  );
};
