/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useContext, createContext } from "react";

const StateContext = createContext();
const noteArr = [];
// let temp = JSON.parse(localStorage.getItem("notes"));
// console.log(temp);
export const ContextProvider = ({ children }) => {
  const [createNote, setCreateNote] = useState(false);
  const [notes, setNotes] = useState([]);
  function createNoteOne(value) {
    noteArr.push(value);
    console.log(noteArr);
    // localStorage.setItem("notes", JSON.stringify(noteArr));
    setNotes(noteArr);
    setCreateNote(true);
  }

  return (
    <StateContext.Provider
      value={{
        createNoteOne,
        createNote,
        notes,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
