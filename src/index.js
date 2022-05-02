import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import {
  AuthProvider,
  NotesProvider,
  ArchiveProvider,
  DeleteProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <NotesProvider>
        <ArchiveProvider>
          <DeleteProvider>
            <Router>
              <App />
            </Router>
          </DeleteProvider>
        </ArchiveProvider>
      </NotesProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
