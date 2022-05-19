import { useState } from "react";
import { useTheme } from "../../context";
import "./ThemeModal.css";

const ThemeModal = ({ showThemeModal, setShowThemeModal }) => {
  const { theme, setTheme } = useTheme();
  const [changedTheme, setChangedTheme] = useState(theme);

  const saveThemeHandler = () => {
    setTheme(changedTheme);
    localStorage.setItem("theme", changedTheme);
    setShowThemeModal(false);
  };

  return (
    <>
      {showThemeModal ? (
        <section
          className="theme-backdrop"
          onClick={() => setShowThemeModal(false)}
        ></section>
      ) : null}
      <section className="theme-modal">
        <h3>Change Theme</h3>
        <div className="theme-container">
          <button
            className={`theme-btn blue-btn ${
              changedTheme === "blue" ? "theme-btn-active" : ""
            }`}
            onClick={() => setChangedTheme("blue")}
          ></button>
          <button
            className={`theme-btn yellow-btn ${
              changedTheme === "yellow" ? "theme-btn-active" : ""
            }`}
            onClick={() => setChangedTheme("yellow")}
          ></button>
          <button
            className={`theme-btn purple-btn ${
              changedTheme === "purple" ? "theme-btn-active" : ""
            }`}
            onClick={() => setChangedTheme("purple")}
          ></button>
          <button
            className={`theme-btn red-btn ${
              changedTheme === "red" ? "theme-btn-active" : ""
            }`}
            onClick={() => setChangedTheme("red")}
          ></button>
          <button
            className={`theme-btn green-btn ${
              changedTheme === "green" ? "theme-btn-active" : ""
            }`}
            onClick={() => setChangedTheme("green")}
          ></button>
        </div>
        <button
          className="btn btn-solid-primary theme-change-btn"
          onClick={saveThemeHandler}
        >
          Change
        </button>
      </section>
    </>
  );
};

export { ThemeModal };
