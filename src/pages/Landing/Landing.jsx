import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context";
import { landingImage } from "../../assets";
import { LoginModal, SignupModal } from "../../components";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null);
  const {
    authState: { token },
  } = useAuth();

  const navigateHandler = () => {
    if (token) {
      navigate("/notes");
    } else {
      toast.warning("You're not logged in");
    }
  };

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
            <div onClick={navigateHandler}>
              <button className="btn btn-outline-primary add-note-btn">
                Add Note
              </button>
            </div>
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
