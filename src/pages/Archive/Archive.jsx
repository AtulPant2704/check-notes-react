import { SideBar, Note } from "../../components";
import "./Archive.css";

const Archive = () => {
  return (
    <>
      <SideBar />
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
