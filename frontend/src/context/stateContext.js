/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useContext, createContext } from "react";

const StateContext = createContext();
const noteArr = [],
  importantArr = [],
  plannedArr = [],
  taskArr = [],
  assignArr = [];
export const ContextProvider = ({ children }) => {
  const [createNote, setCreateNote] = useState(false);

  const [notes, setNotes] = useState([]); //For myDay
  const [important, setImportant] = useState([]); //For important
  const [planned, setPlanned] = useState([]); //For planned
  const [task, setTask] = useState([]); //For tasks
  const [assignedToMe, setAssignedToMe] = useState([]); //For assigne

  const [location, setLocation] = useState(null);
  const createNoteOne = (value) => {
    if (location === "myTasks") {
      noteArr.push(value);
      setNotes(noteArr);
      setCreateNote(true);
    } else if (location === "important") {
      importantArr.push(value);
      setImportant(importantArr);
      setCreateNote(true);
    } else if (location === "planned") {
      plannedArr.push(value);
      setPlanned(plannedArr);
      setCreateNote(true);
    } else if (location === "assignedToMe") {
      assignArr.push(value);
      setAssignedToMe(assignArr);
      setCreateNote(true);
    } else if (location === "tasks") {
      taskArr.push(value);
      setTask(taskArr);
      setCreateNote(true);
    } else {
      setCreateNote(false);
    }
  };

  return (
    <StateContext.Provider
      value={{
        createNoteOne,
        createNote,
        setLocation,
        location,

        important,
        planned,
        task,
        assignedToMe,
        notes,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
