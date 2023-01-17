import React from "react";
import { sideBarItems } from "../../data";
import "../../scss/SidebarStyles/items/items.css";
import { Link } from "react-router-dom";
const Items = () => {
  let active = false;
  const activeClassAdd = (title) => {
    active = true;
    // console.log(active, title);
  };
  return (
    <div className="side-bar-items-container">
      {sideBarItems.map((item) => {
        return (
          <Link
            onClick={() => activeClassAdd(item.title)}
            className={`side-items ${active ? "active" : ""}`}
            key={item.title}
            to={`/${item.path}`}
          >
            <div className="icons">{item.icon}</div>
            <div className="title">{item.title}</div>
          </Link>
        );
      })}
      <div className="horizontal-rule">
        <span />
      </div>
    </div>
  );
};

export default Items;
