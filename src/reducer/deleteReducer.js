const deleteReducer = (state, action) => {
  switch (action.type) {
    case "GET_DELETE":
      return {
        ...state,
        delete: action.payload,
      };
    case "ADD_NOTE_TO_DELETE":
      return {
        ...state,
        delete: action.payload,
      };
    case "REMOVE_NOTE_FROM_DELETE":
      return {
        ...state,
        delete: action.payload,
      };
    default:
      return state;
  }
};

export { deleteReducer };
