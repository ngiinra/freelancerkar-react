import React from "react";
import ReturnButton from "../../../ui/ReturnButton";
import AddCategoryForm from "./AddCategoryForm";

function AddCategory() {
  return (
    <div className="base-color rounded-lg p-5">
      <ReturnButton />
      <AddCategoryForm />
    </div>
  );
}

export default AddCategory;
