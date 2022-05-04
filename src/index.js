import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import {
  AuthProvider,
  NotesProvider,
  ArchiveProvider,
  TrashProvider,
  LabelsProvider,
  FilterProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <NotesProvider>
        <ArchiveProvider>
          <TrashProvider>
            <LabelsProvider>
              <FilterProvider>
                <Router>
                  <App />
                </Router>
              </FilterProvider>
            </LabelsProvider>
          </TrashProvider>
        </ArchiveProvider>
      </NotesProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
