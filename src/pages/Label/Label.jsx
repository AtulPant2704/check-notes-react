import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNotes } from "../../context";
import { Note, NoteModal } from "../../components";
import "./Label.css";

const Label = () => {
  const { labelName } = useParams();
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const {
    notesState: { notes },
  } = useNotes();

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

      <main className="label-page">
        <h2 className="page-title">{labelName} Notes</h2>
        {notes.length > 0 ? (
          <section className="label-notes-container">
            {notes
              .filter((note) => note.label === labelName)
              .map((note) => (
                <Note
                  key={note._id}
                  note={note}
                  setShowNoteModal={setShowNoteModal}
                  setEditNote={setEditNote}
                />
              ))}
          </section>
        ) : (
          <section className="empty-label-notes">
            <h3>This label does not have any notes.</h3>
          </section>
        )}
      </main>
    </>
  );
};

export { Label };
