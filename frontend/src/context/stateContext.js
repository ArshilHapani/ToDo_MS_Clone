/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useContext, createContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [createTodo, setCreateTodo] = useState(null);
  const [createNote, setCreateNote] = useState(false);
  const [notes, setNotes] = useState(null);
  function createNoteOne() {
    setNotes(createTodo);
    setCreateNote(true);
  }
  return (
    <StateContext.Provider
      value={{
        setCreateTodo,
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
