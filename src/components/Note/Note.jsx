import { useLocation } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { useAuth, useNotes, useArchive, useTrash } from "../../context";
import {
  addNoteToArchiveHandler,
  restoreNoteFromArchiveHandler,
  deleteNoteHandler,
  deleteNoteFromArchiveHandler,
  restoreNoteFromTrashHandler,
  deleteNoteFromTrashHandler,
} from "../../utils";
import "./Note.css";

const Note = ({ note, setShowNoteModal, setEditNote }) => {
  const { pathname } = useLocation();
  const {
    authState: { token },
  } = useAuth();
  const { notesDispatch } = useNotes();
  const { archiveDispatch } = useArchive();
  const { trashDispatch } = useTrash();

  const addNoteToArchive = (e) => {
    e.stopPropagation();
    addNoteToArchiveHandler(token, note, archiveDispatch, notesDispatch);
  };

  const restoreNoteFromArchive = (e) => {
    e.stopPropagation();
    restoreNoteFromArchiveHandler(token, note, archiveDispatch, notesDispatch);
  };

  const addNoteToTrash = (e) => {
    e.stopPropagation();
    if (pathname === "/notes") {
      deleteNoteHandler(token, note, notesDispatch, trashDispatch);
    } else if (pathname === "/archive") {
      deleteNoteFromArchiveHandler(token, note, archiveDispatch, trashDispatch);
    } else {
      deleteNoteFromTrashHandler(token, note, trashDispatch);
    }
  };

  const restoreNoteFromTrash = (e) => {
    e.stopPropagation();
    restoreNoteFromTrashHandler(token, note, trashDispatch, notesDispatch);
  };

  const editNoteHandler = () => {
    setEditNote(note);
    setShowNoteModal(true);
  };

  return (
    <div className="note" onClick={editNoteHandler}>
      <button className="pin-btn" title="Pin">
        <span className="material-icons-outlined">push_pin</span>
      </button>
      <h2>{note.title}</h2>
      {ReactHtmlParser(note.content)}
      <div className="note-footer">
        <p className="note-date">{note.date}</p>
        <div className="note-action-btns">
          <button
            title="Delete"
            className="action-btn"
            onClick={addNoteToTrash}
          >
            <span className="material-icons-outlined nav-icon">
              delete_outline
            </span>
          </button>
          {pathname === "/trash" ? (
            <button
              title="Restore"
              className="action-btn"
              onClick={restoreNoteFromTrash}
            >
              <span className="material-icons-outlined nav-icon">
                <span className="material-icons-outlined nav-icon">
                  restore_from_trash
                </span>
              </span>
            </button>
          ) : null}
          {pathname === "/trash" ? null : pathname !== "/archive" ? (
            <button
              title="Archive"
              className="action-btn"
              onClick={addNoteToArchive}
            >
              <span className="material-icons-outlined nav-icon">archive</span>
            </button>
          ) : (
            <button
              title="Un-Archive"
              className="action-btn"
              onClick={restoreNoteFromArchive}
            >
              <span className="material-icons-outlined nav-icon">
                unarchive
              </span>
            </button>
          )}
          {pathname !== "/archive" && pathname !== "/trash" ? (
            <button
              title="Edit"
              className="action-btn"
              onClick={editNoteHandler}
            >
              <span className="material-icons-outlined nav-icon">edit</span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { Note };
