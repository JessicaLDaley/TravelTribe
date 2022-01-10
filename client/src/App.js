import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./Pages/Dashboard";
import Landing from "./Pages/Landing";
import Home from ".//Pages/Home";
import SingleTrip from "./Pages/SingleTrip";
import Profile from "./Pages/Profile";

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
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/trip/:id" component={SingleTrip} />
          <Route exact path="/user/:username" component={Profile}/>
          <Landing />
        </Switch>
        {/* <Footer/> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
