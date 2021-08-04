import React from "react";
import LearnLoops from './learnByMovement/learnLoops'
import LearnSequences from "./learnByMovement/learnSequences";
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CodeAndMoveStyles = styled.div` {
    li {
        display: inline;
        padding: 4rem;
        font-size: 5rem;
    }
       .container { 
        display: flex;
        align-items: center;
        justify-content: center;
        /* margin-top: 150px; */
        height: 100vh;
}
}
`;

export default function Codeandmove() {
  return ( 
      <CodeAndMoveStyles>
  <Router>
  <div className="container">
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
    </CodeAndMoveStyles>
  )
}