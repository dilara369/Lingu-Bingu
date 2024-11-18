import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOutUser()
      .then((result) => {
        console.log("sign out");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" gap-5 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/StartLearning"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Start-Learning
              </NavLink>
              <NavLink
                to="/Tutorials"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Tutorials
              </NavLink>
              <NavLink
                to="/AboutUs"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About-Us
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" gap-5 items-center menu menu-horizontal px-1">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/StartLearning"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Start-Learning
            </NavLink>
            <NavLink
              to="/Tutorials"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tutorials
            </NavLink>
            <NavLink
              to="/AboutUs"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About-Us
            </NavLink>

            {user && (
              <>
                <li>
                  <NavLink to="/Profile">My-Profile</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <div>
                <span>{user.email}</span>
                <a onClick={handleLogout} className="btn">
                  Sign Out
                </a>
              </div>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
