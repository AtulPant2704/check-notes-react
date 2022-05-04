const sortNotesByPriority = (notes, type) => {
  if (type === "") {
    return notes;
  }
  const lowPriorityNotes = notes.filter((note) => note.priority === "Low");
  const mediumPriorityNotes = notes.filter(
    (note) => note.priority === "Medium"
  );
  const highPriorityNotes = notes.filter((note) => note.priority === "High");
  if (type === "lowToHigh") {
    return [...lowPriorityNotes, ...mediumPriorityNotes, ...highPriorityNotes];
  } else {
    return [...highPriorityNotes, ...mediumPriorityNotes, ...lowPriorityNotes];
  }
};

export { sortNotesByPriority };
