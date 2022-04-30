import { useState } from "react";
import { SideBar, Note, NoteModal } from "../../components";
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
          <div className="filter-header">
            <h2 className="filter-heading">Sort</h2>
            <button className="btn btn-solid-primary filter-clear-btn">
              Clear
            </button>
          </div>
          <div className="filter">
            <h3 className="filter-type">By Time:</h3>
            <div className="filter-type-container">
              <input type="radio" id="new-to-old" name="time-filter" />
              <label for="new-to-old">New to Old</label>
            </div>
            <div className="filter-type-container">
              <input type="radio" id="old-to-new" name="time-filter" />
              <label for="old-to-new">Old to New</label>
            </div>
          </div>
          <div className="filter">
            <h3 className="filter-type">By Priority:</h3>
            <div className="filter-type-container">
              <input type="radio" id="high-to-low" name="priority-filter" />
              <label for="high-to-low">High to Low</label>
            </div>
            <div className="filter-type-container">
              <input type="radio" id="low-to-high" name="priority-filter" />
              <label for="low-to-high">Low to High</label>
            </div>
          </div>
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
