const searchNoteHandler = (notes, searchValue) => {
  return notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      note.content.toLowerCase().includes(searchValue.toLowerCase())
  );
};

export { searchNoteHandler };
