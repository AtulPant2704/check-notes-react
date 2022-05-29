import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useNotes, useLabels } from "../../context";
import { Note, NoteModal } from "../../components";
import "./Label.css";

const Label = () => {
  const { labelName } = useParams();
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const {
    notesState: { notes },
  } = useNotes();
  const {
    labelsState: { labels },
  } = useLabels();

  const closeNoteModal = () => {
    setEditNote(null);
    setShowNoteModal(false);
  };

  const doesLabelExist = labels.some((label) => label === labelName);

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

      {doesLabelExist ? (
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
      ) : (
        <Navigate to="/*" />
      )}
    </>
  );
};

export { Label };
