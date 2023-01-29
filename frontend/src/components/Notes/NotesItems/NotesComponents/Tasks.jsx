import React, { useState } from "react";
import "../../../../scss/Notes/NoteItem/noteItem.css";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
// import { FaRegCircle } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { useStateContext } from "../../../../context/stateContext";
import ContextMenu from "../../contextMenu/ContextMenu";
import { handleRightClick } from "../../../functions/contextHandler";
const Tasks = ({ id }) => {
  const { task } = useStateContext();
  // console.log(notes);
  const [isHover, setIsHover] = useState(false);
  function trueSetter(val) {
    setIsHover(val);
  }

  return (
    <>
      {task.map((note, index) => (
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

export default Tasks;
