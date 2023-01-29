/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useContext, createContext } from "react";

const StateContext = createContext();
const noteArr = [],
  importantArr = [],
  plannedArr = [],
  taskArr = [],
  assignArr = [];
localStorage.setItem(
  "notes",
  JSON.stringify(noteArr, importantArr, plannedArr, taskArr, assignArr)
);
export const ContextProvider = ({ children }) => {
  const [myDay, setMyDay] = useState(true); //For myDay
  const [createImportant, setCreateImportant] = useState(true); //For important
  const [createPlanned, setCreatePlanned] = useState(true); //For planned
  const [createTasks, setCreateTasks] = useState(true); //For tasks
  const [createAssign, setCreateAssign] = useState(true); //For assign

  const [notes, setNotes] = useState([]); //For myDay
  const [important, setImportant] = useState([]); //For important
  const [planned, setPlanned] = useState([]); //For planned
  const [task, setTask] = useState([]); //For tasks
  const [assignedToMe, setAssignedToMe] = useState([]); //For assign

  const [location, setLocation] = useState(null);
  function createNoteOne(value) {
    if (location === "myTasks") {
      noteArr.push(value);
      setNotes(noteArr);
      setMyDay(false);
    } else if (location === "important") {
      importantArr.push(value);
      setImportant(importantArr);
      setCreateImportant(false);
    } else if (location === "planned") {
      plannedArr.push(value);
      setPlanned(plannedArr);
      setCreatePlanned(false);
    } else if (location === "assignedToMe") {
      assignArr.push(value);
      setAssignedToMe(assignArr);
      setCreateAssign(false);
    } else if (location === "tasks") {
      taskArr.push(value);
      setTask(taskArr);
      setCreateTasks(false);
    } else {
      setMyDay(true);
      setCreateImportant(true);
      setCreatePlanned(true);
      setCreateTasks(true);
      setCreateAssign(true);
    }
  }

  return (
    <StateContext.Provider
      value={{
        createNoteOne,
        setLocation,
        location,

        important,
        planned,
        task,
        assignedToMe,
        notes,

        createImportant,
        createPlanned,
        createTasks,
        createAssign,
        myDay,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
