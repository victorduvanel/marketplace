import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Footer = () => {
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
    <footer className="position-relative bg-dark page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <Link className="nav-link text-light" to="/">
              <img
                alt=""
                src="/EverAlps_text_seul.png"
                width="auto"
                height="30"
                className="d-inline-block align-top"
              />{" "}
            </Link>{" "}
            <p className="text-light">The example of your future marketplace</p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-0" />
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-light text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-light" href="/">
                  Home
                </a>
              </li>
              <li>
                {auth !== null && (
                  <Link className=" text-light nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                )}
                <a className="text-light" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a className="text-light" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="text-light" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-light text-uppercase">Menu</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-light" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a className="text-light" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a className="text-light" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                {auth != null && (
                  <a className="nav-link pointer text-light" onClick={logout}>
                    Logout
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2022 Copyright:
        <a className="text-light" href="https://totor.ch/">
          {" "}
          totor.ch
        </a>
      </div>
    </footer>
  );
};

export default Footer;
