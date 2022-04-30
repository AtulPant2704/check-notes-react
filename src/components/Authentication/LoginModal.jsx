import "./Auth.css";

const LoginModal = ({ setModalType }) => {
  return (
    <div className="form-wrapper login-form">
      <h2 className="form-heading">Login</h2>
      <form>
        <div className="form-email">
          <label for="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="tanay@neog.camp"
            required
          />
        </div>
        <div className="form-password">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="********"
            required
          />
        </div>
        <div className="user-history">
          <input type="checkbox" id="user-save" />
          <label for="user-save">Remember me</label>
        </div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
      <button
        className="new-account signup-account"
        onClick={() => setModalType("signup")}
      >
        Create New Account
        <ion-icon
          name="chevron-forward-outline"
          className="signup-icon"
        ></ion-icon>
      </button>
    </div>
  );
};

export { LoginModal };
