import React from "react";
import LearnLoops from "./pages/learnByMovement/learnLoops";
import LearnAlgorithm from "./pages/learnByMovement/learnAlgorithm";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/learnLoops">Learn Loops</Link>
          </li>
          <li>
            <Link to="/learnAlgorithm">Learn Algorithm</Link>
          </li>
        </ul>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/learnLoops">
            <LearnLoops />
          </Route>
          <Route path="/learnAlgorithm">
            <LearnAlgorithm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
