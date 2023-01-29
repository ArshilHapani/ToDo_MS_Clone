import React, { useState } from "react";
import "../../../../scss/Notes/NoteItem/noteItem.css";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
// import { FaRegCircle } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { useStateContext } from "../../../../context/stateContext";
import { handleRightClick } from "../../../functions/contextHandler";
import ContextMenu from "../../contextMenu/ContextMenu";
const ImportantNotes = ({ id }) => {
  const { important } = useStateContext();
  // console.log(notes);
  const [isHover, setIsHover] = useState(false);
  function trueSetter(val) {
    setIsHover(val);
  }

  return (
    <>
      {important.map((note, index) => (
        <div
          className="note-container"
          key={note}
          id={`Arshil_${index}`}
          onContextMenu={(e) => handleRightClick(e, index)}
        >
          <i
            onPointerOver={() => trueSetter(true)}
            onPointerOut={() => trueSetter(false)}
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

export default ImportantNotes;
