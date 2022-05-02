import { useLocation } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { useAuth, useNotes, useArchive } from "../../context";
import {
  addNoteToArchiveHandler,
  restoreNoteFromArchiveHandler,
} from "../../utils";
import "./Note.css";

const Note = ({ note, setShowNoteModal, setEditNote }) => {
  const { pathname } = useLocation();
  const {
    authState: { token },
  } = useAuth();
  const { notesDispatch } = useNotes();
  const { archiveDispatch } = useArchive();

  const addNoteToArchive = (e) => {
    e.stopPropagation();
    addNoteToArchiveHandler(token, note, archiveDispatch, notesDispatch);
  };

  const restoreNoteFromArchive = (e) => {
    e.stopPropagation();
    restoreNoteFromArchiveHandler(token, note, archiveDispatch, notesDispatch);
  };

  const editNoteHandler = () => {
    setEditNote(note);
    setShowNoteModal(true);
  };

  return (
    <div className="note" onClick={editNoteHandler}>
      <button className="pin-btn">
        <span className="material-icons-outlined">push_pin</span>
      </button>
      <h2>{note.title}</h2>
      {ReactHtmlParser(note.content)}
      <div className="note-footer">
        <p className="note-date">{note.date}</p>
        <div className="note-action-btns">
          <button className="action-btn">
            <span className="material-icons-outlined nav-icon">
              delete_outline
            </span>
          </button>
          <button
            className="action-btn"
            onClick={
              pathname !== "/archive"
                ? addNoteToArchive
                : restoreNoteFromArchive
            }
          >
            <span className="material-icons-outlined nav-icon">archive</span>
          </button>
          {pathname !== "/archive" ? (
            <button className="action-btn" onClick={editNoteHandler}>
              <span className="material-icons-outlined nav-icon">edit</span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { Note };
