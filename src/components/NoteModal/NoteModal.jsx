import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth, useNotes } from "../../context";
import { addNoteHandler, editNoteHandler } from "../../utils";
import { RichTextEditor } from "../RichTextEditor/RichTextEditor";
import "./NoteModal.css";

const NoteModal = ({ setShowNoteModal, editNote, setEditNote }) => {
  const [newNote, setNewNote] = useState(
    editNote ?? {
      title: "",
      content: "",
      label: "",
      color: "",
      priority: "",
    }
  );
  const { notesDispatch } = useNotes();
  const {
    authState: { token },
  } = useAuth();

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setNewNote((prev) => ({ ...prev, [name]: value }));
  };

  const checkInputs = () => {
    if (newNote.title === "") {
      toast.warning("Enter the Title");
    } else if (newNote.content === "") {
      toast.warning("Enter the Content");
    } else {
      return true;
    }
  };

  const saveNoteHandler = () => {
    if (checkInputs()) {
      editNote
        ? editNoteHandler(token, newNote, notesDispatch)
        : addNoteHandler(token, newNote, notesDispatch);
      setEditNote(null);
      setShowNoteModal(false);
    }
  };

  return (
    <div className="add-note-container">
      <input
        type="text"
        className="note-title"
        placeholder="Enter title"
        name="title"
        value={newNote.title}
        onChange={inputHandler}
      />
      <RichTextEditor newNote={newNote} setNewNote={setNewNote} />
      <div className="add-note-footer">
        <div className="note-select">
          <div className="select-box">
            <label htmlFor="label-select" className="select-label">
              Label:
            </label>
            <select
              id="label-select"
              className="select"
              name="label"
              value={newNote.label}
              onChange={inputHandler}
            >
              <option>Label</option>
              <option value="Label 1">Label 1</option>
              <option value="Label 2">Label 2</option>
              <option value="Label 3">Label 3</option>
            </select>
          </div>
          <div className="select-box">
            <label htmlFor="priority-select" className="select-label">
              Priority:
            </label>
            <select
              id="priority-select"
              className="select"
              name="priority"
              value={newNote.priority}
              onChange={inputHandler}
            >
              <option>Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="select-box">
            <label htmlFor="color-select" className="select-label">
              Color:
            </label>
            <select
              id="color-select"
              className="select"
              name="color"
              value={newNote.color}
              onChange={inputHandler}
            >
              <option>Color</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
            </select>
          </div>
        </div>
        <button
          className="btn btn-solid-primary close-note-btn"
          onClick={saveNoteHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export { NoteModal };
