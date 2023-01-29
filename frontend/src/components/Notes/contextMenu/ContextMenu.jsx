import React from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { noteContextMenuItems } from "../../../data";
import "./contextMenu.scss";
const ContextMenu = () => {
  return (
    <div id="context-menu">
      <div className="context-container">
        {noteContextMenuItems.map((items, index) => (
          <section key={items.logo + index}>
            <div className="items">
              <i>{items.logo}</i>
              <p>{items.desc}</p>
              <span className="shortcut-key">{items.shc}</span>
            </div>
            <span className="horizontal-rule">{items.hr}</span>
          </section>
        ))}
        <div className="items">
          <i style={{ color: "#ff5252" }}>
            <HiOutlineTrash />
          </i>
          <p style={{ color: "#ff5252" }}>Delete task</p>
          <span className="shortcut-key" style={{ color: "#ff5252" }}>
            Delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContextMenu;
