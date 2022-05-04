const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_DATE":
      return {
        ...state,
        sortDateBy: action.payload,
      };
    case "SORT_BY_PRIORITY":
      return {
        ...state,
        sortPriorityBy: action.payload,
      };
    case "CLEAR_FILTER":
      return {
        sortDateBy: "",
        sortPriorityBy: "",
      };
    default:
      return state;
  }
};

export { filterReducer };
