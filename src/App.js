import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CodeBlock from "./pages/learnByMovement/codeBlock";
import LearnSequences from "./pages/learnByMovement/learnSequences";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/codeBlock">
          <CodeBlock />
        </Route>
        <Route path="/learnSequences">
          <LearnSequences />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Route path="/success">
      <Success />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
