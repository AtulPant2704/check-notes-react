import { useState, useEffect } from "react";
import { useAuth, useNotes, useFilter } from "../../context";
import {
  getNotesHandler,
  getPinnedAndUnpinnedNotes,
  sortNotesByDate,
  sortNotesByPriority,
} from "../../utils";
import { Note, NoteModal } from "../../components";
import { Filter } from "./components/Filter";
import "./Notes.css";

const Notes = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const {
    authState: { token },
  } = useAuth();
  const {
    notesState: { notes },
    notesDispatch,
  } = useNotes();
  const {
    filterState: { sortDateBy, sortPriorityBy },
  } = useFilter();

  useEffect(() => {
    getNotesHandler(token, notesDispatch);
  }, []);

  const { pinnedNotes, unPinnedNotes } = getPinnedAndUnpinnedNotes(notes);
  const sortedDateNotes = sortNotesByDate(unPinnedNotes, sortDateBy);
  const sortedPriorityNotes = sortNotesByPriority(
    sortedDateNotes,
    sortPriorityBy
  );

  const closeNoteModal = () => {
    setEditNote(null);
    setShowNoteModal(false);
  };

  return (
    <>
      {showNoteModal ? (
        <section
          className="note-modal-backdrop"
          onClick={closeNoteModal}
        ></section>
      ) : null}
      {showNoteModal ? (
        <NoteModal
          setShowNoteModal={setShowNoteModal}
          editNote={editNote}
          setEditNote={setEditNote}
        />
      ) : null}

      <main className="main">
        <section className="search-filter-section">
          <div className="search">
            <span className="material-icons-outlined btn-search">search</span>
            <input type="text" placeholder="Search" className="input-search" />
          </div>
          <span
            className="material-icons-outlined btn-filter"
            onClick={() => setShowFilters((prev) => !prev)}
          >
            filter_list
          </span>
        </section>

        <div
          className={`filter-container ${
            showFilters ? "filter-container-active" : ""
          }`}
        >
          <Filter />
        </div>

        <section className="add-note-section">
          <button
            className="btn btn-solid-primary"
            onClick={() => setShowNoteModal(true)}
          >
            Add Note
          </button>
        </section>

        <section className="notes-display-section">
          <div className="notes-container">
            {pinnedNotes.map((note) => (
              <Note
                key={note._id}
                note={note}
                setShowNoteModal={setShowNoteModal}
                setEditNote={setEditNote}
              />
            ))}
            {sortedPriorityNotes.map((note) => (
              <Note
                key={note._id}
                note={note}
                setShowNoteModal={setShowNoteModal}
                setEditNote={setEditNote}
              />
            ))}
            {pinnedNotes.length === 0 && unPinnedNotes.length === 0 ? (
              <section className="empty-label-notes">
                <h3>You have not added any notes till now.</h3>
              </section>
            ) : null}
          </div>
        </section>
      </main>
    </>
  );
};

export { Notes };
