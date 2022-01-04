import React from "react";
import Auth from "../utils/auth.js";
import { Link } from "react-router-dom";



function Nav() {
  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
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
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>Signup</Link>
          </li>
        </ul>
      );
    }
  }
  return (
    <header>
      <h1>
        <Link to={"/"}>
         TripTribe
        </Link>
      </h1>

      <nav>{showNav()}</nav>
    </header>
  );
}

export default Nav;