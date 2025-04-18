import React from "react";

function TagInput({ fieldValue, handleInputChange, onClose, name }) {
  return (
    <div className="relative flex flex-wrap max-w-60">
      <input
        type="text"
        name={name}
        value={fieldValue}
        onChange={handleInputChange}
        style={{
          width: `${fieldValue.length * 7}px`,
          minWidth: "40px",
        }}
        className="badge bg-stone-300 dark:bg-slate-500 dark:text-slate-950 p-2"
        placeholder="+"
      />
      <button
        className="absolute right-1 text-sm text-pink-600 dark:text-red-700 font-bold"
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        x
      </button>
    </div>
  );
}

export default TagInput;
