import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <Link to={"/login"}>⬅ Login</Link>

      <h2>Signup</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input placeholder="First" name="firstname" type="firstname"></input>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input placeholder="Last" name="lastname" type="lastname"></input>
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            placeholder="email@example.com"
            name="email"
            type="email"></input>
        </div>
        <div>
          <label htmlFor="Pasword">Password:</label>
          <input placeholder="******" name="password" type="password"></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

