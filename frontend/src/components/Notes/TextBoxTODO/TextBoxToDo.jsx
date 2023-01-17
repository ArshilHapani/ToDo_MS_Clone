import React, { useRef, useState } from "react";
import "../../../scss/Notes/BottomTextBox/bottomText.css";
import { FaRegCircle } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";
import { useStateContext } from "../../../context/stateContext";
const TextBoxToDo = () => {
  const { createNoteOne } = useStateContext();
  const [focusTB, setFocusTB] = useState(false);
  const valueDefault = useRef();
  const createNoteFn = () => {
    createNoteOne(valueDefault.current.value);
    valueDefault.current.value = "";
  };
  const setFocus = (val) => {
    setFocusTB(val);
  };
  return (
    <div className="bottom-text">
      <button onClick={createNoteFn}>
        {focusTB ? <VscAdd /> : <FaRegCircle />}
      </button>
      <input
        type="text"
        placeholder="Add a Task"
        id="tb-primary"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        ref={valueDefault}
        autoComplete="off"
      />
    </div>
  );
};

export default TextBoxToDo;
