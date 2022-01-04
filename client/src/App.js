import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";
import Landing from "./components/Pages/Landing";
import Home from "./components/Pages/Home";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Landing/>
      </Switch>
  </Router>
);
}

export default App;