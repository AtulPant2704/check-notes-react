const sortNotesByDate = (notes, type) => {
  if (type === "oldToNew") {
    return [...notes].sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (type === "newToOld") {
    return [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));
  } else {
    return notes;
  }
};

export { sortNotesByDate };
