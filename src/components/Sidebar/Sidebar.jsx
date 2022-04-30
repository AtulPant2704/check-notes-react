import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const SideBar = () => {
  const [sideExpand, setSideExpand] = useState(false);
  const [labelCollapse, setLabelCollapse] = useState(false);

  return (
    <header className={`nav-header ${sideExpand ? "expander" : ""}`}>
      <nav className="navbar">
        <div>
          <div className="nav-brand">
            <span
              class="material-icons-outlined toggle-menu"
              onClick={() => setSideExpand((prev) => !prev)}
            >
              menu
            </span>
            <Link to="/" className="brand-name">
              CheckNote
            </Link>
          </div>
          <div className="nav-list">
            <Link to="/notes" className="nav-link active">
              <span class="material-icons-outlined nav-icon">lightbulb</span>
              <span className="nav-name">Notes</span>
            </Link>
            <div className="nav-link collapse">
              <span class="material-icons-outlined nav-icon">edit</span>
              <span className="nav-name">Labels</span>
              <span
                class={`material-icons-outlined collapse-link ${
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
                  <span class="material-icons-outlined">sell</span> Label 1
                </Link>
                <Link to="/label" className="collapse-sublink">
                  <span class="material-icons-outlined">label</span> Label 2
                </Link>
                <Link to="/label" className="collapse-sublink">
                  <span class="material-icons-outlined">label</span> Label 3
                </Link>
              </ul>
            </div>
            <Link to="/archive" className="nav-link">
              <span class="material-icons-outlined nav-icon">archive</span>
              <span className="nav-name">Archive</span>
            </Link>
            <Link to="/delete" className="nav-link">
              <span class="material-icons-outlined nav-icon">
                delete_outline
              </span>
              <span className="nav-name">Trash</span>
            </Link>
          </div>
        </div>
        <Link to="/" className="nav-link">
          <span class="material-icons-outlined nav-icon">logout</span>
          <span className="nav-name">Log Out</span>
        </Link>
      </nav>
    </header>
  );
};

export { SideBar };
