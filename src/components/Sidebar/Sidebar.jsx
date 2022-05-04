import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useLabels } from "../../context";
import { AddLabelModal } from "../AddLabelModal/AddLabelModal";
import "./Sidebar.css";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sideExpand, setSideExpand] = useState(false);
  const [labelCollapse, setLabelCollapse] = useState(false);
  const [showLabelModal, setShowLabelModal] = useState(false);
  const { authDispatch } = useAuth();
  const {
    labelsState: { labels },
  } = useLabels();
  const path = location.pathname;

  const expandHandler = () => {
    setSideExpand(false);
    setLabelCollapse(false);
  };

  const routeHandler = (path) => {
    expandHandler();
    navigate(path);
  };

  const labelsCollapseHandler = () => {
    setLabelCollapse((prev) => !prev);
    setSideExpand(true);
  };

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    toast.success("Successfully Logged Out");
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
                onClick={() => setSideExpand((prev) => !prev)}
              >
                menu
              </span>
              <Link to="/" className="brand-name">
                CheckNote
              </Link>
            </div>
            <div className="nav-list">
              <div
                onClick={() => routeHandler("/notes")}
                className={`nav-link ${path === "/notes" ? "active" : ""}`}
              >
                <span
                  title="Notes"
                  className="material-icons-outlined nav-icon"
                >
                  lightbulb
                </span>
                <span className="nav-name">Notes</span>
              </div>
              <div
                className={`nav-link collapse ${
                  labelCollapse || path.includes("/label") ? "active" : ""
                }`}
                onClick={labelsCollapseHandler}
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
                >
                  expand_more
                </span>
                <ul
                  className={` ${
                    labelCollapse ? "show-collapse" : "collapse-menu"
                  }`}
                >
                  {labels.map((label) => (
                    <div
                      key={label}
                      className={`collapse-sublink ${
                        path.includes(label) ? "collapse-sublink-active" : ""
                      }`}
                      onClick={() => routeHandler(`/labels/${label}`)}
                    >
                      <span className="material-icons-outlined">label</span>
                      {label}
                    </div>
                  ))}
                  <button
                    className="add-label-btn"
                    onClick={() => setShowLabelModal(true)}
                  >
                    <span className="material-icons-outlined">add</span>Add new
                    Label
                  </button>
                </ul>
              </div>
              <div
                onClick={() => routeHandler("/archive")}
                className={`nav-link ${path === "/archive" ? "active" : ""}`}
              >
                <span
                  title="Archive"
                  className="material-icons-outlined nav-icon"
                >
                  archive
                </span>
                <span className="nav-name">Archive</span>
              </div>
              <div
                onClick={() => routeHandler("/trash")}
                className={`nav-link ${path === "/trash" ? "active" : ""}`}
              >
                <span
                  title="Trash"
                  className="material-icons-outlined nav-icon"
                >
                  delete_outline
                </span>
                <span className="nav-name">Trash</span>
              </div>
            </div>
          </div>
          <div className="nav-link" onClick={logoutHandler}>
            <span title="Logout" className="material-icons-outlined nav-icon">
              logout
            </span>
            <span className="nav-name">Log Out</span>
          </div>
        </nav>
      </header>
    </>
  );
};

export { SideBar };
