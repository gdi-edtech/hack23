import React from "react";
import "./NavBar.css";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  // useAuth use UserContext that use createContext from react in order to obtain the current user informations

  return (
    <>
      <div className="navbar-entire">
        {/* The logo redirects to homePage */}
        <div className="navbar-left">
          <Link to="/">
            <img
              className="logo-nav-bar"
              src="https://res.cloudinary.com/dsioshcio/image/upload/v1699583151/image_5_hpfwic.png"
              alt="logo"
            ></img>
          </Link>
        </div>

        <div className="nav-hamburger-responsive">
          <div id="navbar-center-responsive" className="navbar-center">
            <div className="artists-creations">
              <div className="link-navbar-responsive">
                <Link
                  to="/"
                  id="link-all-artists"
                  className="navbar-artist-creation-link"
                >
                  Home
                </Link>
              </div>
              <div className="link-navbar-responsive">
                <Link
                  to="/about"
                  id="link-all-creations"
                  className="navbar-artist-creation-link"
                >
                  About
                </Link>
              </div>
              <div className="link-navbar-responsive">
                <Link
                  to="/"
                  id="link-all-creations"
                  className="navbar-artist-creation-link"
                >
                  Login/Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-right">

            <div className="responsive-loggin">
              <div className="link-navbar-responsive">
                <NavLink
                  id="navbar-right-responsive"
                  className="navbar-login-register-link"
                  to="/profile"
                >
                </NavLink>
              </div>
              <div className="link-navbar-responsive">
              <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              className="search-input"
            />
            <button type="button" className="search-button">
              Search
            </button>
          </div>
              </div>
            </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
