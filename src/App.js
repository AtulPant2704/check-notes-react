import { Routes, Route } from "react-router-dom";
import { SideBar } from "./components";
import { Landing, Trash, Archive, Notes, Label } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SideBar />
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
