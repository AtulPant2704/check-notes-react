import { createContext, useContext, useReducer } from "react";
import { trashReducer } from "../reducer";

const TrashContext = createContext(null);

const TrashProvider = ({ children }) => {
  const [trashState, trashDispatch] = useReducer(trashReducer, {
    trash: [],
  });

  return (
    <TrashContext.Provider value={{ trashState, trashDispatch }}>
      {children}
    </TrashContext.Provider>
  );
};

const useTrash = () => useContext(TrashContext);

export { TrashProvider, useTrash };
