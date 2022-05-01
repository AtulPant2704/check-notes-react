import { Routes, Route, useLocation } from "react-router-dom";
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
        <Route path="/notes" element={<Notes />} />
        <Route path="/label" element={<Label />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;
