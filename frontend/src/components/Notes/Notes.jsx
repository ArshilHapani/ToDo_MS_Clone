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
  MyDay,
  PlannedNotes,
  Tasks,
} from "../Notes/NotesItems/NotesComponents/Exporter";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
} from "../../images/imageExporter";
const Notes = () => {
  const {
    createImportant,
    createPlanned,
    createTasks,
    createAssign,
    myDay,
    location,
  } = useStateContext();
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
  let imageVar;
  if (location === "important") {
    imageVar = `url(${image2})`;
  } else if (location === "myTasks") {
    imageVar = `url(${image1})`;
  } else if (location === "planned") {
    imageVar = `url(${image3})`;
  } else if (location === "assignedToMe") {
    imageVar = `url(${image4})`;
  } else if (location === "tasks") {
    imageVar = `url(${image5})`;
  }
  let myStyle = {
    backgroundImage: imageVar,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      {/* Header Component */}
      <div className="notes-component" style={myStyle}>
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

        {/* Choose whether to show empty note container or the notes container ||| To achieve that was pain in the ....🍑 */}
        <div className="Notes-flex-container">
          <Routes>
            {myDay ? (
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
            ) : (
              <Route element={<MyDay />} exact path="/" />
            )}

            {createImportant ? (
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
            ) : (
              <Route element={<ImportantNotes />} exact path="/important" />
            )}

            {createPlanned ? (
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
            ) : (
              <Route element={<PlannedNotes />} exact path="/planned" />
            )}

            {createAssign ? (
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
            ) : (
              <Route element={<AssignedToMe />} exact path="/assignedToMe" />
            )}

            {createTasks ? (
              <Route
                exact
                path="/tasks"
                element={<EmptyNoteItem desc={"Tasks ToDo."} hero={task} />}
              />
            ) : (
              <Route element={<Tasks />} exact path="/tasks" />
            )}
          </Routes>
        </div>
        <TextBoxToDo />
      </div>
    </>
  );
};

export default Notes;
