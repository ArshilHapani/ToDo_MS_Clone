import React from "react";
import { useStateContext } from "../../context/stateContext";
import "../../scss/Notes/Notes.css";
import Header from "./Header/Header";
import EmptyNoteItem from "./NotesItems/EmptyNoteItem";
import NoteItem from "./NotesItems/NoteItem";
import TextBoxToDo from "./TextBoxTODO/TextBoxToDo";
const Notes = () => {
  const { createNote } = useStateContext();
  return (
    <>
      <div className="notes-component">
        <Header title="My Day" />
        <div className="Notes-flex-container">
          {createNote ? <NoteItem /> : <EmptyNoteItem />}
        </div>
        <TextBoxToDo />
      </div>
    </>
  );
};

export default Notes;
