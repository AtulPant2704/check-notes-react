import { useEffect } from "react";
import { useAuth, useTrash } from "../../context";
import { getTrashHandler } from "../../utils";
import { Note } from "../../components";
import "./Trash.css";

const Trash = () => {
  const {
    authState: { token },
  } = useAuth();
  const {
    trashState: { trash },
    trashDispatch,
  } = useTrash();

  useEffect(() => {
    getTrashHandler(token, trashDispatch);
  }, []);

  return (
    <>
      <main className="delete-page">
        <h2 className="page-title">Deleted Notes</h2>
        {trash.length > 0 ? (
          <section className="deleted-notes-container">
            {trash.map((note) => (
              <Note key={note._id} note={note} />
            ))}
          </section>
        ) : (
          <section className="empty-label-notes">
            <h3>No notes in Trash.</h3>
          </section>
        )}
      </main>
    </>
  );
};

export { Trash };
