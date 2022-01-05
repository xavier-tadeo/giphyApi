import React from "react";
import "./AddCategory.scss";

export const AddCategory = () => {
  return (
    <div className="addcategory">
      <h3 className="addcategory__title">Added category</h3>
      <input type="text" className="addcategory__input" />
    </div>
  );
};
