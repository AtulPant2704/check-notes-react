import "./Note.css";

const Note = () => {
  return (
    <div className="note">
      <button className="pin-btn">
        <span className="material-icons-outlined">push_pin</span>
      </button>
      <h2>Title</h2>
      <h4>Content</h4>
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
          <button className="action-btn">
            <span className="material-icons-outlined nav-icon">edit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Note };
