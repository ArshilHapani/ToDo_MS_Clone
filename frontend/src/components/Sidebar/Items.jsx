import React from "react";
import { sideBarItems } from "../../data";
import "../../scss/SidebarStyles/items/items.css";
const Items = () => {
  let active = false;
  const activeClassAdd = (title) => {
    active = true;
    console.log(active, title);
  };
  return (
    <div className="side-bar-items-container">
      {sideBarItems.map((item) => {
        return (
          <div
            onClick={() => activeClassAdd(item.title)}
            className={`side-items ${active ? "active" : ""}`}
            key={item.title}
          >
            <div className="icons">{item.icon}</div>
            <div className="title">{item.title}</div>
          </div>
        );
      })}
      <div className="horizontal-rule">
        <span />
      </div>
    </div>
  );
};

export default Items;
