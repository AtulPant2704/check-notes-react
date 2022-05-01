const notesReducer = (state, action) => {
  switch (action.type) {
    case "GET_NOTES":
      return {
        ...state,
        notes: action.payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: action.payload,
      };
    case "EDIT_NODE":
      return {
        ...state,
        notes: action.payload,
      };
    default:
      return state;
  }
};

export { notesReducer };
