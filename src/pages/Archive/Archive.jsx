import { Note } from "../../components";
import "./Archive.css";

const Archive = () => {
  return (
    <>
      <main className="archive-page">
        <h2 className="page-title">Archived Notes</h2>
        <section className="archived-notes-container">
          <Note />
          <Note />
          <Note />
          <Note />
        </section>
      </main>
    </>
  );
};

export { Archive };
