import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";
import Landing from "./components/Pages/Landing";
import Home from "./components/Pages/Home";
import SingleTrip from "./components/Pages/SingleTrip";
import Profile from "./components/Pages/Profile";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/trip/:id" component={SingleTrip} />
          <Route exact path="/user/:username" component={Profile}/>
          <Landing />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
