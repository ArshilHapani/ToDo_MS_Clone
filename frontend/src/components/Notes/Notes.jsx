import React from "react";
import { Route, Routes } from "react-router-dom";
import { useStateContext } from "../../context/stateContext";
import "../../scss/Notes/Notes.css";
import Header from "./Header/Header";
import EmptyNoteItem from "./NotesItems/EmptyNoteItem";
import NoteItem from "./NotesItems/NoteItem";
import TextBoxToDo from "./TextBoxTODO/TextBoxToDo";
import Calender from "../../images/PlainCalender.png";
import important from "../../images/Paper.png";
import planned from "../../images/scheduleCalendar.png";
import assignedToMe from "../../images/assignmentTask.png";
import task from "../../images/to-do-list_Task.png";
const Notes = () => {
  const { createNote } = useStateContext();
  return (
    <>
      <div className="notes-component">
        <Header title="My Day" />
        <div className="Notes-flex-container">
          {createNote ? (
            <Routes>
              <Route element={<NoteItem />} exact path="/" />
            </Routes>
          ) : (
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <EmptyNoteItem
                    title={"Focus on your day"}
                    desc={
                      "Get things done with My Day, a list that refresh everyday."
                    }
                    hero={Calender}
                  />
                }
              />
              <Route
                exact
                path="/important"
                element={
                  <EmptyNoteItem
                    desc={"Try starting task to see them here."}
                    hero={important}
                  />
                }
              />
              <Route
                exact
                path="/planned"
                element={
                  <EmptyNoteItem
                    desc={"Task with due dates and remainders show up here."}
                    hero={planned}
                  />
                }
              />
              <Route
                exact
                path="/assignedToMe"
                element={
                  <EmptyNoteItem
                    desc={"Task assigned to you show up here."}
                    hero={assignedToMe}
                  />
                }
              />
              <Route
                exact
                path="/tasks"
                element={<EmptyNoteItem desc={"Tasks ToDo."} hero={task} />}
              />
            </Routes>
          )}
        </div>
        <TextBoxToDo />
      </div>
    </>
  );
};

export default Notes;
