import { Routes, Route, useLocation } from "react-router-dom";
import { RequiresAuth } from "./RequiresAuth";
import { SideBar } from "./components";
import { Landing, Trash, Archive, Notes, Label } from "./pages";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" ? <SideBar /> : null}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/notes"
          element={
            <RequiresAuth>
              <Notes />
            </RequiresAuth>
          }
        />
        <Route
          path="/label"
          element={
            <RequiresAuth>
              <Label />
            </RequiresAuth>
          }
        />
        <Route
          path="/archive"
          element={
            <RequiresAuth>
              <Archive />
            </RequiresAuth>
          }
        />
        <Route
          path="/trash"
          element={
            <RequiresAuth>
              <Trash />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
