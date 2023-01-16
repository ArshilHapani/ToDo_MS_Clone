import React, { useState } from "react";
import "../../../scss/Notes/BottomTextBox/bottomText.css";
import { FaRegCircle } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";
import { useStateContext } from "../../../context/stateContext";
const TextBoxToDo = () => {
  const { setCreateTodo, createNoteOne } = useStateContext();
  const [focusTB, setFocusTB] = useState(false);
  const handleText = (e) => {
    setCreateTodo(e.target.value);
  };

  const setFocus = (val) => {
    setFocusTB(val);
  };
  return (
    <div className="bottom-text">
      <i onClick={createNoteOne}>
        {focusTB === true ? <VscAdd /> : <FaRegCircle />}
      </i>
      <input
        type="text"
        placeholder="Add a Task"
        id="tb-primary"
        onChange={handleText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};

export default TextBoxToDo;
