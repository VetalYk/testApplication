import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function TabBar() {
  return (
    <div className="tab-bar-container">
      <div className="first-tab tab">
        <NavLink to="movies" activeClassName="selected-tab">
          MOVIES
        </NavLink>
      </div>
      <div className="second-tab tab">
        <NavLink to="todo" activeClassName="selected-tab">
          TODO
        </NavLink>
      </div>
    </div>
  );
}
