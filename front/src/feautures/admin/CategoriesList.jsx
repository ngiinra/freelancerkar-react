import React from "react";
import useCategoriesList from "../category/useCategoriesList";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import CategoriesTree from "./categories/CategoriesTree";
import { Link } from "react-router-dom";

function CategoriesList() {
  const { data, isPending } = useCategoriesList();

  if (isPending) return <Loader size="15px" color="blue" />;
  if (data?.data?.categories.length === 0)
    return <Empty resource="دسته بندی ای" />;
  return (
    <div>
      <div className="mb-10 flex justify-between items-center">
        <h2>لیست دسته بندی ها</h2>
        <Link to="add" className="btn text-center w-60">
          + افزودن دسته بندی
        </Link>
      </div>
      <CategoriesTree categories={data?.data?.categories} />
    </div>
  );
}

export default CategoriesList;
