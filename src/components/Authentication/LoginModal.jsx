import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context";
import { loginService } from "../../services";
import "./Auth.css";

const LoginModal = ({ setModalType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [saveUser, setSaveUser] = useState(false);
  const { authDispatch } = useAuth();

  const guestUser = {
    email: "test@gmail.com",
    password: "test123",
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const guestUserHandler = (event) => {
    event.preventDefault();
    setUser(guestUser);
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    if (user.email !== "" && user.password !== "") {
      try {
        const response = await loginService(user);
        if (response.status === 200) {
          if (saveUser) {
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem(
              "user",
              JSON.stringify(response.data.foundUser)
            );
          }
          authDispatch({
            type: "LOGIN",
            payload: {
              user: response.data.foundUser,
              token: response.data.encodedToken,
            },
          });
          navigate(location?.state?.from?.pathname || "/notes", {
            replace: true,
          });
          toast.success("Successfully Logged In");
        } else {
          throw new Error("Something went wrong! Please try again later");
        }
      } catch (error) {
        toast.error(error.response.data.errors[0]);
      }
    } else {
      toast.warning("Both the fields need to be entered");
    }
  };

  return (
    <div className="form-wrapper login-form">
      <h2 className="form-heading">Login</h2>
      <form>
        <div className="form-email">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="tanay@neog.camp"
            name="email"
            value={user.email}
            required
            onChange={changeHandler}
          />
        </div>
        <div className="form-password">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="********"
            name="password"
            value={user.password}
            required
            onChange={changeHandler}
          />
        </div>
        <div className="user-history">
          <input
            type="checkbox"
            id="user-save"
            checked={saveUser}
            onChange={(e) =>
              e.target.checked ? setSaveUser(true) : setSaveUser(false)
            }
          />
          <label htmlFor="user-save">Remember me</label>
        </div>
        <button
          className="btn btn-text-primary text-underline btn-guest-note"
          onClick={guestUserHandler}
        >
          Add Guest credentials
        </button>
        <button type="submit" className="btn-submit" onClick={loginHandler}>
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
