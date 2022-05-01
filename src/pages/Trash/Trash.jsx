import { Note } from "../../components";
import "./Trash.css";

const Trash = () => {
  return (
    <>
      <main className="delete-page">
        <h2 className="page-title">Deleted Notes</h2>
        <section className="deleted-notes-container">
          <Note />
          <Note />
          <Note />
          <Note />
        </section>
      </main>
    </>
  );
};

export { Trash };
