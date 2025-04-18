import React from "react";

function StatItem({ icon, label, value }) {
  return (
    <div className="grid grid-cols-2 p-5 border-1 base-border base-color-100 rounded-lg gap-1 hover:-translate-y-5 transition-all duration-300 not-hover:translate-0">
      <div className="row-span-2 flex justify-center items-center rounded-full border-1 base-border md:size-30 size-25 ml-2">
        {icon}
      </div>
      <p className="flex items-end">{label}</p>
      <p className="text-xl overflow-x-auto"> {value}</p>
    </div>
  );
}

export default StatItem;

export function StatList({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {children}
    </div>
  );
}
