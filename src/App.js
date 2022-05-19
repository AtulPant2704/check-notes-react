import { Routes, Route, useLocation } from "react-router-dom";
import { useTheme, useAuth } from "./context";
import { ToastContainer } from "react-toastify";
import { RequiresAuth } from "./RequiresAuth";
import { SideBar } from "./components";
import { Landing, Trash, Archive, Notes, Label, Error404 } from "./pages";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const location = useLocation();
  const { theme } = useTheme();
  const {
    authState: { token },
  } = useAuth();

  return (
    <div
      className={`App ${
        theme === "blue"
          ? "blue-theme"
          : theme === "yellow"
          ? "yellow-theme"
          : theme === "purple"
          ? "purple-theme"
          : theme === "red"
          ? "red-theme"
          : theme === "green"
          ? "green-theme"
          : ""
      }`}
    >
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {location.pathname.includes("/labels") ||
      location.pathname === "/archive" ||
      location.pathname === "/trash" ? (
        <SideBar />
      ) : null}

      <Routes>
        <Route path="/" element={token ? <Notes /> : <Landing />} />
        <Route
          path="/notes"
          element={
            <RequiresAuth>
              <Notes />
            </RequiresAuth>
          }
        />
        <Route
          path="/labels/:labelName"
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
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
