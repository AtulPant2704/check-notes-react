import { landingImage } from "../../assets";
import { LoginModal, SignupModal } from "../../components";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <section className="backdrop"></section>

      <section className="landing-page">
        <div className="intro-text">
          <h1 className="title">
            <span>Check</span> Notes
          </h1>
          <p className="para">Take Notes the simple way for free. Forever.</p>
          <div className="btn-container">
            <button className="btn btn-solid-primary signup-btn">
              Sign Up
            </button>
            <a href="./notes/notes.html">
              <button className="btn btn-outline-primary add-note-btn">
                Add Note
              </button>
            </a>
          </div>
          <button className="login-btn">Already have an account?</button>
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
