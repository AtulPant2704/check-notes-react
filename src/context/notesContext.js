import { createContext, useContext, useReducer } from "react";
import { noteReducer } from "../reducer";

const NotesContext = createContext(null);

const NotesProvider = ({ children }) => {
  const [notesState, notesDispatch] = useReducer(noteReducer, { notes: [] });

  return (
    <NotesContext.Provider value={{ notesState, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
