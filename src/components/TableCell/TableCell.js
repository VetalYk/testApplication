/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "./style.css";

export default function TableCell({ cellData, onCellClick }) {
  if (cellData.includes("/images/"))
    return (
      <td className="image-wrapper" onClick={onCellClick}>
        <img className="img" src={cellData} alt="" />
      </td>
    );
  return (
    <td className="table-cell" onClick={onCellClick}>
      <span>{cellData}</span>
    </td>
  );
}
