const trashReducer = (state, action) => {
  switch (action.type) {
    case "GET_TRASH":
      return {
        ...state,
        delete: action.payload,
      };
    case "ADD_NOTE_TO_TRASH":
      return {
        ...state,
        delete: action.payload,
      };
    case "REMOVE_NOTE_FROM_TRASH":
      return {
        ...state,
        delete: action.payload,
      };
    default:
      return state;
  }
};

export { trashReducer };
