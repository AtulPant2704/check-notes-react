import { Link } from "react-router-dom";
import "./Sidebar.css";

const SideBar = () => {
  return (
    <header className="nav-header">
      <nav className="navbar">
        <div>
          <div className="nav-brand">
            <ion-icon name="menu-outline" className="toggle-menu"></ion-icon>
            <Link to="/" className="brand-name">
              CheckNote
            </Link>
          </div>
          <div className="nav-list">
            <Link to="/notes" className="nav-link active">
              <ion-icon name="bulb-outline" className="nav-icon"></ion-icon>
              <span className="nav-name">Notes</span>
            </Link>
            <div className="nav-link collapse">
              <ion-icon name="pencil-outline" className="nav-icon"></ion-icon>
              <span className="nav-name">Labels</span>

              <ion-icon
                name="chevron-down-outline"
                className="collapse-link"
              ></ion-icon>

              <ul className="collapse-menu">
                <Link to="/label" className="collapse-sublink">
                  <ion-icon name="pricetag-outline"></ion-icon> Label 1
                </Link>
                <Link to="/label" className="collapse-sublink">
                  <ion-icon name="pricetag-outline"></ion-icon> Label 2
                </Link>
                <Link to="/label" className="collapse-sublink">
                  <ion-icon name="pricetag-outline"></ion-icon> Label 3
                </Link>
              </ul>
            </div>
            <Link to="/archive" className="nav-link">
              <ion-icon name="archive-outline" className="nav-icon"></ion-icon>
              <span className="nav-name">Archive</span>
            </Link>
            <Link to="/delete" className="nav-link">
              <ion-icon name="trash-outline" className="nav-icon"></ion-icon>
              <span className="nav-name">Trash</span>
            </Link>
          </div>
        </div>
        <Link to="/" className="nav-link">
          <ion-icon name="log-out-outline" className="nav-icon"></ion-icon>
          <span className="nav-name">Log Out</span>
        </Link>
      </nav>
    </header>
  );
};

export { SideBar };
