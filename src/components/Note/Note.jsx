import ReactHtmlParser from "react-html-parser";
import "./Note.css";

const Note = ({ note, setShowNoteModal, setEditNote }) => {
  const editNoteHandler = () => {
    setEditNote(note);
    setShowNoteModal(true);
  };

  return (
    <div className="note" onClick={editNoteHandler}>
      <button className="pin-btn">
        <span className="material-icons-outlined">push_pin</span>
      </button>
      <h2>{note.title}</h2>
      {ReactHtmlParser(note.content)}
      <div className="note-footer">
        <p className="note-date">02/04/2020 05:20</p>
        <div className="note-action-btns">
          <button className="action-btn">
            <span className="material-icons-outlined nav-icon">
              delete_outline
            </span>
          </button>
          <button className="action-btn">
            <span className="material-icons-outlined nav-icon">archive</span>
          </button>
          <button className="action-btn" onClick={editNoteHandler}>
            <span className="material-icons-outlined nav-icon">edit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Note };
