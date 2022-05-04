const labelsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_LABEL":
      return {
        ...state,
        labels: [...state.labels, action.payload],
      };
    default:
      return state;
  }
};

export { labelsReducer };
