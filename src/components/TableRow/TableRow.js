import React from "react";
import TableCell from "../TableCell/TableCell";
import "./style.css";

export default function TableRow({ rowItems, onCellClick }) {
  return (
    <tr className="table-row">
      {rowItems.map((i) => (
        <TableCell key={i} cellData={i} onCellClick={onCellClick} />
      ))}
    </tr>
  );
}
