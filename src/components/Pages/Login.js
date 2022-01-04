import React from "react";
import { Link } from "react-router-dom";
//import Auth from "../../utils/auth";

function Login() {
  return (
    <div>
      <Link to={"/signup"}>➡ Signup</Link>

      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            placeholder="email@example.com"
            name="email"
            type="email"></input>
        </div>
        <div>
          <label htmlFor="Password">Password:</label>
          <input placeholder="******" name="password" type="password"></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;