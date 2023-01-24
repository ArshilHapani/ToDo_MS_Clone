import React, { useState } from "react";
import "../../../../scss/Notes/NoteItem/noteItem.css";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
// import { FaRegCircle } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { useStateContext } from "../../../../context/stateContext";
const MyDay = ({ id }) => {
  const { notes } = useStateContext();
  const [isHover, setIsHover] = useState(false);
  function trueSetter(val) {
    setIsHover(val);
  }
  const handleRightClick = (e) => {
    e.preventDefault(); // prevent the default behavior when right clicked
    console.log("%c Right Click", "color:cyan");
    let contextMenu = document.getElementById("context-menu");
    contextMenu.classList.add("active");
    contextMenu.style.top = `calc(${e.clientY}px - 100px)`;
    contextMenu.style.left = `calc(${e.clientX}px - 320px)`;

    window.addEventListener("click", () => {
      document.getElementById("context-menu").classList.remove("active");
    });
  };

  return (
    <>
      {notes.map((note) => (
        <div
          className="note-container"
          key={note}
          id="Arshil"
          onContextMenu={handleRightClick}
        >
          <i
            // id="note"
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
          <div id="context-menu"></div>
        </div>
      ))}
    </>
  );
};

export default MyDay;
