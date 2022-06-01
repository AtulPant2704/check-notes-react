import { useState, Fragment } from "react";
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
  pinNoteHandler,
} from "../../utils";
import "./Note.css";

const Note = ({ note, setShowNoteModal, setEditNote }) => {
  const { pathname } = useLocation();
  const [pinBtnDisable, setPinBtnDisable] = useState(false);
  const [archiveBtnDisable, setArchiveBtnDisable] = useState(false);
  const [unarchiveBtnDisable, setUnarchiveBtnDisable] = useState(false);
  const [deleteBtnDisable, setDeleteBtnDisable] = useState(false);
  const [restoreBtnDisable, setRestoreBtnDisable] = useState(false);
  const {
    authState: { token },
  } = useAuth();
  const { notesDispatch } = useNotes();
  const { archiveDispatch } = useArchive();
  const { trashDispatch } = useTrash();

  const addNoteToArchive = (e) => {
    e.stopPropagation();
    addNoteToArchiveHandler(
      token,
      note,
      archiveDispatch,
      notesDispatch,
      setArchiveBtnDisable
    );
  };

  const restoreNoteFromArchive = (e) => {
    e.stopPropagation();
    restoreNoteFromArchiveHandler(
      token,
      note,
      archiveDispatch,
      notesDispatch,
      setUnarchiveBtnDisable
    );
  };

  const addNoteToTrash = (e) => {
    e.stopPropagation();
    if (pathname === "/notes") {
      deleteNoteHandler(
        token,
        note,
        notesDispatch,
        trashDispatch,
        setDeleteBtnDisable
      );
    } else if (pathname === "/archive") {
      deleteNoteFromArchiveHandler(
        token,
        note,
        archiveDispatch,
        trashDispatch,
        setDeleteBtnDisable
      );
    } else {
      deleteNoteFromTrashHandler(
        token,
        note,
        trashDispatch,
        setDeleteBtnDisable
      );
    }
  };

  const restoreNoteFromTrash = (e) => {
    e.stopPropagation();
    restoreNoteFromTrashHandler(
      token,
      note,
      trashDispatch,
      notesDispatch,
      setRestoreBtnDisable
    );
  };

  const pinNote = (e) => {
    e.stopPropagation();
    pinNoteHandler(token, note, notesDispatch, setPinBtnDisable);
  };

  const getDateString = (date) => {
    const currentDate = date.slice(0, 10).split("-").reverse().join("/");
    const currentTime = date.slice(11, 16);
    return currentDate + " " + currentTime;
  };

  const editNoteHandler = () => {
    setEditNote(note);
    setShowNoteModal(true);
  };

  const getTextColor = (color) => {
    if (color !== "Default") {
      return "note-text-black";
    }
    return "";
  };

  return (
    <div className={`note ${note.color}`} onClick={editNoteHandler}>
      <button
        className={`pin-btn ${getTextColor(note.color)}`}
        title="Pin"
        disabled={pinBtnDisable}
        onClick={pinNote}
      >
        <span
          className={`${
            note.isPinned ? "material-icons" : "material-icons-outlined"
          }`}
          onClick={pinBtnDisable ? (e) => e.stopPropagation() : null}
        >
          push_pin
        </span>
      </button>
      <h3 className={`${getTextColor(note.color)}`}>{note.title}</h3>
      <Fragment className={`${getTextColor(note.color)}`}>
        {ReactHtmlParser(note.content)}
      </Fragment>
      <div className="note-footer">
        <p className={`note-date ${getTextColor(note.color)}`}>
          {getDateString(note.date)}
        </p>
        <span className={`note-priority ${getTextColor(note.color)}`}>
          {note.priority.toUpperCase()}
        </span>
        <div className="note-action-btns">
          <button
            title="Delete"
            className={`action-btn ${getTextColor(note.color)}`}
            disabled={deleteBtnDisable}
            onClick={addNoteToTrash}
          >
            <span
              onClick={deleteBtnDisable ? (e) => e.stopPropagation() : null}
              className="material-icons-outlined nav-icon"
            >
              delete_outline
            </span>
          </button>
          {pathname === "/trash" ? (
            <button
              title="Restore"
              className={`action-btn ${getTextColor(note.color)}`}
              disabled={restoreBtnDisable}
              onClick={restoreNoteFromTrash}
            >
              <span
                onClick={restoreBtnDisable ? (e) => e.stopPropagation() : null}
                className="material-icons-outlined nav-icon"
              >
                restore_from_trash
              </span>
            </button>
          ) : null}
          {pathname === "/trash" ? null : pathname !== "/archive" ? (
            <button
              title="Archive"
              className={`action-btn ${getTextColor(note.color)}`}
              disabled={archiveBtnDisable}
              onClick={addNoteToArchive}
            >
              <span
                onClick={archiveBtnDisable ? (e) => e.stopPropagation() : null}
                className="material-icons-outlined nav-icon"
              >
                archive
              </span>
            </button>
          ) : (
            <button
              title="Un-Archive"
              className={`action-btn ${getTextColor(note.color)}`}
              disabled={unarchiveBtnDisable}
              onClick={restoreNoteFromArchive}
            >
              <span
                onClick={
                  unarchiveBtnDisable ? (e) => e.stopPropagation() : null
                }
                className="material-icons-outlined nav-icon"
              >
                unarchive
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { Note };
