import React, { useEffect } from "react";
import { sideBarItems } from "../../data";
import "../../scss/SidebarStyles/items/items.css";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../../context/stateContext";
const Items = () => {
  const location = useLocation();
  const { setLocation } = useStateContext();
  useEffect(() => {
    if (location.pathname === "/") {
      setLocation("myTasks");
    } else if (location.pathname === "/important") {
      setLocation("important");
    } else if (location.pathname === "/planned") {
      setLocation("planned");
    } else if (location.pathname === "/assignedToMe") {
      setLocation("assignedToMe");
    } else if (location.pathname === "/tasks") {
      setLocation("tasks");
    }
  }, [location.pathname, setLocation]);
  return (
    <div className="side-bar-items-container">
      {sideBarItems.map((item) => {
        return (
          <Link
            className={`side-items ${
              location.pathname === item.path ? "active" : ""
            }`}
            key={item.title}
            to={item.path}
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
