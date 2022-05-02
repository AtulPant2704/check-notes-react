import { useState, useEffect } from "react";
import { useAuth, useNotes } from "../../context";
import { getNotesHandler } from "../../utils";
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

  useEffect(() => {
    getNotesHandler(token, notesDispatch);
  }, []);

  return (
    <>
      {showNoteModal ? (
        <section
          className="note-modal-backdrop"
          onClick={() => setShowNoteModal(false)}
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
            {notes.map((note) => (
              <Note
                key={note._id}
                note={note}
                setShowNoteModal={setShowNoteModal}
                setEditNote={setEditNote}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export { Notes };
