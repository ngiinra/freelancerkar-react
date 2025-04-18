import React, { useState } from "react";
import CategoryInfoForm from "./CategoryInfoForm";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";

function CategoriesTree({ categories = [] }) {
  const nodes = categories.filter((cat) => cat.parentId === null);
  const childrensNode = categories.filter((cat) => cat.parentId !== null);
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleShowCategory(category) {
    setSelectedCategory(category);
  }
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="w-full lg:w-1/3 overflow-auto border-b-1 lg:border-b-0 lg:border-l-1 base-border lg:h-100 p-2 my-custom-class">
        <SimpleTreeView>
          {nodes.map((node) => (
            <TreeItem
              key={node._id}
              itemId={node._id}
              label={node.title}
              onClick={() => handleShowCategory(node)}
            >
              {childrensNode
                .filter((child) => child.parentId === node._id)
                .map((child) => (
                  <TreeItem
                    itemId={child._id}
                    label={child.title}
                    key={child._id}
                    onClick={() => handleShowCategory(child)}
                  />
                ))}
            </TreeItem>
          ))}
        </SimpleTreeView>
      </div>
      <div className="w-full lg:w-2/3">
        {selectedCategory !== "" ? (
          <CategoryInfoForm category={selectedCategory} />
        ) : (
          <p>لطفا یک مورد را انتخاب نمایید</p>
        )}
      </div>
    </div>
  );
}

export default CategoriesTree;
