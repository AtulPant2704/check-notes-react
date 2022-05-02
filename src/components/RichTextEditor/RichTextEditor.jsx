import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const formats = ["bold", "italic", "underline", "strike", "image", "list"];

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [],
    [{ list: "ordered" }, { list: "bullet" }],
    [],
    ["image"],
  ],
};

const RichTextEditor = ({ newNote, setNewNote }) => {
  return (
    <ReactQuill
      theme="snow"
      formats={formats}
      modules={modules}
      className="note-content"
      placeholder="Add note text here....."
      value={newNote.content}
      onChange={(value) => setNewNote((prev) => ({ ...prev, content: value }))}
    />
  );
};

export { RichTextEditor };
