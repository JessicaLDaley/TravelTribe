import React from "react";
import Auth from "../utils/auth.js";
import { NavLink } from "react-router-dom";

function Nav() {
  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      );
    }
  }
  return (
    <header>
      <h1>
        <NavLink to="/">
          TripTribe
        </NavLink>
      </h1>

      <nav>{showNav()}</nav>
    </header>
  );
}

export default Nav;