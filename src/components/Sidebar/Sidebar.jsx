import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AddLabelModal } from "../AddLabelModal/AddLabelModal";
import "./Sidebar.css";

const SideBar = () => {
  const location = useLocation();
  const [sideExpand, setSideExpand] = useState(false);
  const [labelCollapse, setLabelCollapse] = useState(false);
  const [showLabelModal, setShowLabelModal] = useState(false);
  const path = location.pathname;

  const expandHandler = () => {
    if (sideExpand === true) {
      setSideExpand(false);
      setLabelCollapse(false);
    } else {
      setSideExpand(true);
    }
  };

  return (
    <>
      {showLabelModal ? (
        <AddLabelModal
          showLabelModal={showLabelModal}
          setShowLabelModal={setShowLabelModal}
        />
      ) : null}
      <header className={`nav-header ${sideExpand ? "expander" : ""}`}>
        <nav className="navbar">
          <div>
            <div className="nav-brand">
              <span
                className="material-icons-outlined toggle-menu"
                onClick={expandHandler}
              >
                menu
              </span>
              <Link to="/" className="brand-name">
                CheckNote
              </Link>
            </div>
            <div className="nav-list">
              <Link
                to="/notes"
                className={`nav-link ${path === "/notes" ? "active" : ""}`}
              >
                <span
                  title="Notes"
                  className="material-icons-outlined nav-icon"
                >
                  lightbulb
                </span>
                <span className="nav-name">Notes</span>
              </Link>
              <div
                className={`nav-link collapse ${
                  labelCollapse || path === "/label" ? "active" : ""
                }`}
              >
                <span
                  title="Label"
                  className="material-icons-outlined nav-icon"
                >
                  edit
                </span>
                <span className="nav-name">Labels</span>
                <span
                  className={`material-icons-outlined collapse-link ${
                    labelCollapse ? "rotate" : ""
                  }`}
                  onClick={() => setLabelCollapse((prev) => !prev)}
                >
                  expand_more
                </span>
                <ul
                  className={` ${
                    labelCollapse ? "show-collapse" : "collapse-menu"
                  }`}
                >
                  <Link to="/label" className="collapse-sublink">
                    <span className="material-icons-outlined">label</span> Label
                    1
                  </Link>
                  <Link to="/label" className="collapse-sublink">
                    <span className="material-icons-outlined">label</span> Label
                    2
                  </Link>
                  <Link to="/label" className="collapse-sublink">
                    <span className="material-icons-outlined">label</span> Label
                    3
                  </Link>
                  <button
                    className="add-label-btn"
                    onClick={() => setShowLabelModal(true)}
                  >
                    <span className="material-icons-outlined">add</span>Add new
                    Label
                  </button>
                </ul>
              </div>
              <Link
                to="/archive"
                className={`nav-link ${path === "/archive" ? "active" : ""}`}
              >
                <span
                  title="Archive"
                  className="material-icons-outlined nav-icon"
                >
                  archive
                </span>
                <span className="nav-name">Archive</span>
              </Link>
              <Link
                to="/trash"
                className={`nav-link ${path === "/trash" ? "active" : ""}`}
              >
                <span
                  title="Trash"
                  className="material-icons-outlined nav-icon"
                >
                  delete_outline
                </span>
                <span className="nav-name">Trash</span>
              </Link>
            </div>
          </div>
          <Link to="/" className="nav-link">
            <span title="Logout" className="material-icons-outlined nav-icon">
              logout
            </span>
            <span className="nav-name">Log Out</span>
          </Link>
        </nav>
      </header>
    </>
  );
};

export { SideBar };
