import React from "react";

function Table({ children }) {
  return (
    <div className="overflow-x-auto">
      <table className="overflow-hidden rounded-lg">{children}</table>
    </div>
  );
}

function Thead({ children }) {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
}

function TBody({ children }) {
  return (
    <tbody className="bg-white text-stone-600 dark:text-slate-300 dark:bg-slate-900">
      {children}
    </tbody>
  );
}

Table.Thead = Thead;
Table.Tbody = TBody;
export default Table;
