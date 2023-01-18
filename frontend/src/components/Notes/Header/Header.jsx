import React from "react";
import "../../../scss/Notes/Header/header.css";
import { TbLayersIntersect2 } from "react-icons/tb";
import { AiOutlineBulb } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";
const Header = ({ title, date, day, name, icon, space, bulbTrue }) => {
  return (
    <div className="notes-header-container">
      <div className="right-item">
        <p>
          {icon}
          {space && <span>&nbsp;</span>}
          {title}
        </p>
        <span>
          {day} {name} {date}
        </span>
      </div>
      <div className="left-items">
        <i>
          <TbLayersIntersect2 />
        </i>
        {bulbTrue && (
          <i>
            <AiOutlineBulb />
          </i>
        )}
        <span>
          <SlOptions />
        </span>
      </div>
    </div>
  );
};

export default Header;
