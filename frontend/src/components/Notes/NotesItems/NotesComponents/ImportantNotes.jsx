import React, { useState } from "react";
import "../../../../scss/Notes/NoteItem/noteItem.css";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
// import { FaRegCircle } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { useStateContext } from "../../../../context/stateContext";
const ImportantNotes = ({ id }) => {
  const { important } = useStateContext();
  // console.log(notes);
  const [isHover, setIsHover] = useState(false);
  function trueSetter(val) {
    setIsHover(val);
  }

  return (
    <>
      {important.map((note) => (
        <div className="note-container" key={note}>
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
        </div>
      ))}
    </>
  );
};

export default ImportantNotes;
