import React, { useState } from "react";
import "./AddCategory.scss";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("mas");

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setInputValue("");
  };
  return (
    <div className="addcategory">
      <h3 className="addcategory__title">Added category</h3>
      <form className="addcategory__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="addcategory__input"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};
