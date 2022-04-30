import { SideBar, Note } from "../../components";
import "./Label.css";

const Label = () => {
  return (
    <>
      <SideBar />
      <main className="label-page">
        <h2 class="page-title">Label Notes</h2>
        <section className="label-notes-container">
          <Note />
          <Note />
          <Note />
          <Note />
        </section>
      </main>
    </>
  );
};

export { Label };
