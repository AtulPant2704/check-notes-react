import { createContext, useContext, useReducer } from "react";
import { labelsReducer } from "../reducer";

const LabelsContext = createContext(null);

const LabelsProvider = ({ children }) => {
  const [labelsState, labelsDispatch] = useReducer(labelsReducer, {
    labels: ["work"],
  });

  return (
    <LabelsContext.Provider value={{ labelsState, labelsDispatch }}>
      {children}
    </LabelsContext.Provider>
  );
};

const useLabels = () => useContext(LabelsContext);

export { LabelsProvider, useLabels };
