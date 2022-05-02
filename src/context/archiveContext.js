import { createContext, useContext, useReducer } from "react";
import { archiveReducer } from "../reducer";

const ArchiveContext = createContext(null);

const ArchiveProvider = ({ children }) => {
  const [archiveState, archiveDispatch] = useReducer(archiveReducer, {
    archive: [],
  });

  return (
    <ArchiveContext.Provider value={{ archiveState, archiveDispatch }}>
      {children}
    </ArchiveContext.Provider>
  );
};

const useArchive = () => useContext(ArchiveContext);

export { ArchiveProvider, useArchive };
