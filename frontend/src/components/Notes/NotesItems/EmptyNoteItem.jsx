import React from "react";
import Calender from "../../../images/calendar.png";
import "../../../scss/Notes/EmptyNotesProfiler/emptyContainer.css";
const EmptyNoteItem = () => {
  return (
    <div className="null-container-img">
      <div className="img-container">
        <img src={Calender} alt="CalenderImg" />{" "}
        {/* //TODO Make as props image */}
        <h3>Focus on your Day.</h3>
        <span>Get things done with My Day, a list that refresh everyday.</span>
      </div>
    </div>
  );
};

export default EmptyNoteItem;
