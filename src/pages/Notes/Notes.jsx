import { useState } from "react";
import { Note, NoteModal } from "../../components";
import { Filter } from "./components/Filter";
import "./Notes.css";

const Notes = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);

  return (
    <>
      {showNoteModal ? (
        <section
          className="note-modal-backdrop"
          onClick={() => setShowNoteModal(false)}
        ></section>
      ) : null}
      {showNoteModal ? <NoteModal setShowNoteModal={setShowNoteModal} /> : null}

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
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
          </div>
        </section>
      </main>
    </>
  );
};

export { Notes };
