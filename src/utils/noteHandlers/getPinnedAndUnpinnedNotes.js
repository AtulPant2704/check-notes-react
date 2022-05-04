const getPinnedAndUnpinnedNotes = (notes) => {
  const pinnedNotes = notes.filter((note) => note.isPinned);
  const unPinnedNotes = notes.filter((note) => !note.isPinned);
  return { pinnedNotes, unPinnedNotes };
};

export { getPinnedAndUnpinnedNotes };
