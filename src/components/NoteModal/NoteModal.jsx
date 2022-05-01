import { RichTextEditor } from "../RichTextEditor/RichTextEditor";
import "./NoteModal.css";

const NoteModal = ({ setShowNoteModal }) => {
  return (
    <div className="add-note-container">
      <input type="text" className="note-title" placeholder="Enter title" />
      <RichTextEditor />
      <div className="add-note-footer">
        <div className="note-select">
          <div className="select-box">
            <label htmlFor="label-select" className="select-label">
              Label:
            </label>
            <select id="label-select" className="select">
              <option value="Label 1">Label 1</option>
              <option value="Label 2">Label 2</option>
              <option value="Label 3">Label 3</option>
            </select>
          </div>
          <div className="select-box">
            <label htmlFor="priority-select" className="select-label">
              Priority:
            </label>
            <select id="priority-select" className="select">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="select-box">
            <label htmlFor="color-select" className="select-label">
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
          className="btn btn-solid-primary close-note-btn"
          onClick={() => setShowNoteModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export { NoteModal };
