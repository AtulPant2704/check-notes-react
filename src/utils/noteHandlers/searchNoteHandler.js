const searchNoteHandler = (notes, searchValue) => {
  return notes.filter(
    (note) =>
      note.title.includes(searchValue) || note.content.includes(searchValue)
  );
};

export { searchNoteHandler };
