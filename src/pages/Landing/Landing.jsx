import { useState } from "react";
import { Link } from "react-router-dom";
import { landingImage } from "../../assets";
import { LoginModal, SignupModal } from "../../components";
import "./Landing.css";

const Landing = () => {
  const [modalType, setModalType] = useState(null);

  return (
    <>
      {modalType ? (
        <section
          className="backdrop"
          onClick={() => setModalType(null)}
        ></section>
      ) : null}
      {modalType === "login" ? (
        <LoginModal setModalType={setModalType} />
      ) : null}
      {modalType === "signup" ? (
        <SignupModal setModalType={setModalType} />
      ) : null}

      <section className="landing-page">
        <div className="intro-text">
          <h1 className="title">
            <span>Check</span> Notes
          </h1>
          <p className="para">Take Notes the simple way for free. Forever.</p>
          <div className="btn-container">
            <button
              className="btn btn-solid-primary signup-btn"
              onClick={() => setModalType("signup")}
            >
              Sign Up
            </button>
            <Link to="./notes/notes.html">
              <button className="btn btn-outline-primary add-note-btn">
                Add Note
              </button>
            </Link>
          </div>
          <button className="login-btn" onClick={() => setModalType("login")}>
            Already have an account?
          </button>
        </div>
        <div className="intro-img">
          <img
            className="img-responsive"
            src={landingImage}
            alt="intro-note-image"
          />
        </div>
      </section>
    </>
  );
};

export { Landing };
