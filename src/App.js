import React, {useState, useEffect} from "react";
import LearnLoops from "./pages/learnByMovement/learnLoops";
// import ml5 from "ml5";
import LearnSequences from "./pages/learnByMovement/learnSequences";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [counter, setCounter] = React.useState(60);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div>
    <div className="App">
    <div>Countdown: {counter}</div>
  </div>
  <div>
    <Router>
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
    </Router>
    </div>
    </div>
  );
}

export default App;
