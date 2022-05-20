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
  ThemeProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
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
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
