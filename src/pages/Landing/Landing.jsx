import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, useAuth } from "../../context";
import {
  blueLanding,
  greenLanding,
  purpleLanding,
  redLanding,
  yellowLanding,
} from "../../assets";
import { LoginModal, SignupModal } from "../../components";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const {
    authState: { token },
  } = useAuth();
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    if (token) {
      navigate("/notes");
    }
  }, []);

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
          </div>
          <button className="login-btn" onClick={() => setModalType("login")}>
            Already have an account?
          </button>
        </div>
        <div className="intro-img">
          <img
            className="img-responsive"
            src={
              theme === "blue"
                ? blueLanding
                : theme === "green"
                ? greenLanding
                : theme === "purple"
                ? purpleLanding
                : theme === "red"
                ? redLanding
                : yellowLanding
            }
            alt="intro-note-image"
          />
        </div>
      </section>
    </>
  );
};

export { Landing };
