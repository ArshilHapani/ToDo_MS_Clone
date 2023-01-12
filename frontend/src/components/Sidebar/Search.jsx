import React from "react";
import "../../scss/SidebarStyles/searchBox/searchBox.css";
import {VscSearch} from 'react-icons/vsc'
const Search = () => {
  return (
    <div className="search-notes-input">
      <input type="text" placeholder="Search" />
      <VscSearch className="search-icon" />
    </div>
  );
};

export default Search;
