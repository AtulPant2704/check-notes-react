const archiveReducer = (state, action) => {
  switch (action.type) {
    case "GET_ARCHIVE":
      return {
        ...state,
        archive: action.payload,
      };
    case "ADD_NOTE_TO_ARCHIVE":
      return {
        ...state,
        archive: action.payload,
      };
    case "REMOVE_NOTE_FROM_ARCHIVE":
      return {
        ...state,
        archive: action.payload,
      };
    default:
      return state;
  }
};

export { archiveReducer };
