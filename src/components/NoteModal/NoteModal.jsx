import "./NoteModal.css";

const NoteModal = ({ setShowNoteModal }) => {
  return (
    <div className="add-note-container">
      <input type="text" className="note-title" placeholder="Enter title" />
      <textarea
        name="note-para"
        id="note-para"
        cols="30"
        rows="10"
        className="note-content"
        placeholder="Enter content..."
      ></textarea>
      <div className="add-note-footer">
        <div className="note-select">
          <div className="select-box">
            <label for="label-select" className="select-label">
              Label:
            </label>
            <select id="label-select" className="select">
              <option value="Label 1">Label 1</option>
              <option value="Label 2">Label 2</option>
              <option value="Label 3">Label 3</option>
            </select>
          </div>
          <div className="select-box">
            <label for="priority-select" className="select-label">
              Priority:
            </label>
            <select id="priority-select" className="select">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="select-box">
            <label for="color-select" className="select-label">
              Color:
            </label>
            <select id="color-select" className="select">
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
            </select>
          </div>
        </div>
        <button
          className="btn btn-text-primary close-note-btn"
          onClick={() => setShowNoteModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export { NoteModal };
