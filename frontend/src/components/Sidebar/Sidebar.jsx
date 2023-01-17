import React from "react";
import "../../scss/SidebarStyles/sidebar.css";
import BottomItem from "./BottomItem";
import Items from "./Items";
import Profile from "./Profile";
import Search from "./Search";
const Sidebar = () => {
  return (
    <>
      <div className="side-bar">
        <Profile />
        <Search />
        <Items />
        <div className="bottom-item">
          <BottomItem />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
