import React from "react";
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LearnLoops from "./pages/learnByMovement/learnLoops";
import LearnSequences from './pages/learnByMovement/learnSequences';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
          <Route path="/learnLoops">
            <LearnLoops />
          </Route>
          <Route path="/learnSequences">
            <LearnSequences />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;