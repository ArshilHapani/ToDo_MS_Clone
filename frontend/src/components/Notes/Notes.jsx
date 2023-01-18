import React from "react";
import { Route, Routes } from "react-router-dom";
import { useStateContext } from "../../context/stateContext";
import "../../scss/Notes/Notes.css";
import Header from "./Header/Header";
import EmptyNoteItem from "./NotesItems/EmptyNoteItem";
import TextBoxToDo from "./TextBoxTODO/TextBoxToDo";
import Calender from "../../images/PlainCalender.png";
import important from "../../images/Paper.png";
import planned from "../../images/scheduleCalendar.png";
import assignedToMe from "../../images/assignmentTask.png";
import task from "../../images/to-do-list_Task.png";
import { AiOutlineStar, AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { CgMenuBoxed } from "react-icons/cg";
import {
  AssignedToMe,
  ImportantNotes,
  NoteItem,
  PlannedNotes,
  Tasks,
} from "../Notes/NotesItems/NotesComponents/Exporter";
const Notes = () => {
  const { createNote } = useStateContext();

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let name = month[d.getMonth()];
  let date = d.getDate();

  return (
    <>
      <div className="notes-component">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Header
                title={"My Day"}
                date={date}
                day={`${day},`}
                name={name}
                bulbTrue={true}
                key={"GoAway"}
              />
            }
          />
          <Route
            exact
            path="/important"
            element={
              <Header
                title={"Important"}
                space={true}
                icon={<AiOutlineStar />}
                date={""}
                day={""}
                name={""}
                key={"Luffy"}
              />
            }
          />
          <Route
            exact
            path="/planned"
            element={
              <Header
                title={"Planned"}
                space={true}
                icon={<CgMenuBoxed />}
                key={"Robin♥"}
              />
            }
          />
          <Route
            exact
            path="/assignedToMe"
            element={
              <Header
                title={"Assigned to me"}
                space={true}
                icon={<AiOutlineUser />}
                key={"Arshil"}
              />
            }
          />
          <Route
            exact
            path="/tasks"
            element={
              <Header
                title={"Tasks"}
                space={true}
                icon={<AiOutlineHome />}
                key={"Arshil_Hapani"}
              />
            }
          />
        </Routes>
        <div className="Notes-flex-container">
          {createNote ? (
            <Routes>
              <Route element={<NoteItem />} exact path="/" />
              <Route element={<ImportantNotes />} exact path="/important" />
              <Route element={<PlannedNotes />} exact path="/planned" />
              <Route element={<AssignedToMe />} exact path="/assignedToMe" />
              <Route element={<Tasks />} exact path="/tasks" />
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
