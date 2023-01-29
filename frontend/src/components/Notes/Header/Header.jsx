import React, { useState } from "react";
import "../../../scss/Notes/Header/header.css";
import { TbLayersIntersect2 } from "react-icons/tb";
import { AiOutlineBulb } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";
import ThemeMenu from "./ThemeMenu";
const Header = ({ title, date, day, name, icon, space, bulbTrue }) => {
  const [themeContainer, setThemeContainer] = useState(false);

  if (themeContainer) return <ThemeMenu />;
  else
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
            <i
              onClick={() =>
                alert(
                  "Zindagi me kabhi dhang k idea ate hai tumhe jo aaj aaenge? Kuch nhi hai mere pass nikal 🥺"
                )
              }
            >
              <AiOutlineBulb />
            </i>
          )}
          <span
            onClick={() =>
              themeContainer === true
                ? setThemeContainer(false)
                : setThemeContainer(true)
            }
          >
            <SlOptions />
          </span>
        </div>
      </div>
    );
};

export default Header;
