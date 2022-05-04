import { useEffect } from "react";
import { useAuth, useArchive } from "../../context";
import { getArchiveHandler } from "../../utils";
import { Note } from "../../components";
import "./Archive.css";

const Archive = () => {
  const {
    authState: { token },
  } = useAuth();
  const {
    archiveState: { archive },
    archiveDispatch,
  } = useArchive();

  useEffect(() => getArchiveHandler(token, archiveDispatch), []);

  return (
    <>
      <main className="archive-page">
        <h2 className="page-title">Archived Notes</h2>
        {archive.length > 0 ? (
          <section className="archived-notes-container">
            {archive.map((note) => (
              <Note key={note._id} note={note} />
            ))}
          </section>
        ) : (
          <section className="empty-label-notes">
            <h3>No notes in Archive.</h3>
          </section>
        )}
      </main>
    </>
  );
};

export { Archive };
