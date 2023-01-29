import React from "react";
import "../../../scss/Notes/EmptyNotesProfiler/emptyContainer.css";
const EmptyNoteItem = ({ hero, title, desc }) => {
  return (
    <div className="null-container-img">
      <div className="img-container">
        <img src={hero} alt="CalenderImg" /> {/* //TODO Make as props image */}
        <article>{title}</article>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default EmptyNoteItem;
