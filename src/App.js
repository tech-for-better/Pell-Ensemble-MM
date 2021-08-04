import React from "react";
import NavBar from './components/NavBar';
import Codeandmove from "./pages/Codeandmove";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/codeandmove">
            <Codeandmove />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
  );
}

export default App;