import { createContext, useContext, useReducer } from "react";
import { deleteReducer } from "../reducer";

const DeleteContext = createContext(null);

const DeleteProvider = ({ children }) => {
  const [deleteState, deleteDispatch] = useReducer(deleteReducer, {
    delete: [],
  });

  return (
    <DeleteContext.Provider value={{ deleteState, deleteDispatch }}>
      {children}
    </DeleteContext.Provider>
  );
};

const useDelete = () => useContext(DeleteContext);

export { DeleteProvider, useDelete };
