import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AddCategory.scss";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [...categories, inputValue]);
      setInputValue("");
    }
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

AddCategory.propType = {
  setCategories: PropTypes.func.isRequired,
};
