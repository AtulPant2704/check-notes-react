import "./Auth.css";

const SignupModal = () => {
  return (
    <div className="form-wrapper signup-form">
      <h2 className="form-heading">Signup</h2>
      <form>
        <div className="form-username">
          <label for="name">Full Name</label>
          <input id="name" type="text" placeholder="Enter your name" required />
        </div>
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
        <div className="form-confirm-password">
          <label for="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            placeholder="********"
            required
          />
        </div>
        <div className="user-history">
          <input type="checkbox" id="user-request" />
          <label for="user-request">I accept all Terms & Conditions</label>
        </div>
        <button type="submit" className="btn-submit">
          Create New Account
        </button>
      </form>
      <button className="new-account login-account">
        Already have an Account{" "}
        <ion-icon
          name="chevron-forward-outline"
          className="signup-icon"
        ></ion-icon>
      </button>
    </div>
  );
};

export { SignupModal };
