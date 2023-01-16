import React from "react";
import "../../../scss/Notes/Header/header.css";
import { TbLayersIntersect2 } from "react-icons/tb";
import { AiOutlineBulb } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";
const Header = ({ title }) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let name = month[d.getMonth()];
  let date = d.getDate();

  return (
    <div className="notes-header-container">
      <div className="right-item">
        <p>{title}</p>
        <span>
          {day}, {name} {date}
        </span>
      </div>
      <div className="left-items">
        <i>
          <TbLayersIntersect2 />
        </i>
        <i>
          <AiOutlineBulb />
        </i>
        <span>
          <SlOptions />
        </span>
      </div>
    </div>
  );
};

export default Header;
