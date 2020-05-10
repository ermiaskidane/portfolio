import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomeScreen from "./container/homeScreen/homeScreen";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";

import Layout from "./container/layout/layout";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/" component={HomeScreen} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
