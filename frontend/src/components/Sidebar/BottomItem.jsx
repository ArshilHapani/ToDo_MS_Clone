import React from "react";
import "../../scss/SidebarStyles/items/items.css";
import { MdOutlineAdd } from "react-icons/md";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
const Bottom_item = () => {
  return (
    <div className="bottom-item-container">
      <div className="side-items">
        <span className="add-icon">
          <MdOutlineAdd />
        </span>
        <div className="text-list">New list</div>        
      </div>

      <div className="square-icon-container">
          <div className="square-icon">
            <HiOutlineSquaresPlus />
          </div>
        </div>
    </div>
  );
};

export default Bottom_item;
