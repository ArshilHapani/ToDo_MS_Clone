import React, { useState } from "react";
import "../../../../scss/Notes/NoteItem/noteItem.css";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
// import { FaRegCircle } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { useStateContext } from "../../../../context/stateContext";
import ContextMenu from "../../contextMenu/ContextMenu";
import { handleRightClick } from "../../../functions/contextHandler";
const MyDay = ({ id }) => {
  const { notes } = useStateContext();
  const [isHover, setIsHover] = useState(false);
  function trueSetter(val) {
    setIsHover(val);
  }
  return (
    <>
      {notes.map((note, index) => (
        <div
          className="note-container"
          key={note + index}
          id={`Arshil_${index}`}
          onContextMenu={(e) => handleRightClick(e, index)}
        >
          <i
            id={`note_${index}`}
            onMouseEnter={() => trueSetter(true)}
            onMouseLeave={() => trueSetter(false)}
            // onMouseMoveCapture={() => trueSetter(false)}
            // onMouseDownCapture={() => trueSetter(true)}
          >
            {isHover ? <FaRegCheckCircle /> : <FaRegCircle />}
            {/* <FaRegCircle /> */}
          </i>
          <p>{note}</p>
          <span>
            <AiOutlineStar />
          </span>
          <ContextMenu />
        </div>
      ))}
    </>
  );
};

export default MyDay;
