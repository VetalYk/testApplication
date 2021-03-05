import React from "react";
import "./style.css";

export default function TableHeader({ items }) {
  return (
    <thead className="header">
      <tr className="header-row">
        {items.map((item) => (
          <th key={item} className="header-cell">
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
}
