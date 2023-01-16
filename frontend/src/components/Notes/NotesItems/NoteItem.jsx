import React, { useState } from "react";
import "../../../scss/Notes/NoteItem/noteItem.css";
import { FaRegCircle } from "react-icons/fa";
import { AiOutlineStar, AiOutlineCheckCircle } from "react-icons/ai";
import { useStateContext } from "../../../context/stateContext";
const NoteItem = () => {
  const { notes } = useStateContext();
  const [checkSum, setCheckSum] = useState(false);
  const trueSetter = (val) => {
    setCheckSum(val);
  };
  return (
    <div className="note-container">
      <i
        onMouseEnter={() => trueSetter(true)}
        onMouseLeave={() => trueSetter(false)}
      >
        {checkSum ? <AiOutlineCheckCircle /> : <FaRegCircle />}
      </i>
      <p>{notes}</p>
      <span id="checkSum">
        <AiOutlineStar />
      </span>
    </div>
  );
};

export default NoteItem;
