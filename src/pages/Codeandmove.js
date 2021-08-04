import React from "react";
import LearnLoops from './learnByMovement/learnLoops'
import LearnSequences from "./learnByMovement/learnSequences";
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Codeandmove() {
  return ( 
  <Router>
      <div>
        <ul>
          <li>
            <Link to="/learnLoops">Learn Loops</Link>
          </li>
          <li>
            <Link to="/learnSequences">Learn Sequences</Link>
          </li>
        </ul>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/learnLoops">
            <LearnLoops />
          </Route>
          <Route path="/learnSequences">
            <LearnSequences />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}