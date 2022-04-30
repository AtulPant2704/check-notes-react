import { Routes, Route } from "react-router-dom";
import { Landing, Trash, Archive } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/notes" element={<Landing />} />
        <Route path="/label" element={<Landing />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;
