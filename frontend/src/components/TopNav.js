import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const TopNav = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => ({ ...state }));
  const history = useHistory();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    history.push("/login");
  };

  return (
    <div className="nav bg-dark d-flex justify-content-between p-3">
      <Link className="nav-link text-light" to="/">
        <img
          alt=""
          src="/EverAlps_text_seul.png"
          width="auto"
          height="30"
          className="d-inline-block align-top"
        />{" "}
      </Link>
      <div className="d-flex">
        {auth !== null && (
          <Link className="nav-link text-light" to="/dashboard">
            Dashboard
          </Link>
        )}
        {auth != null && (
          <a className="nav-link pointer text-light" onClick={logout}>
            Logout
          </a>
        )}
        {auth === null && (
          <>
            <Link className="nav-link text-light" to="/login">
              Login
            </Link>
            <Link className="nav-link text-light" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNav;
