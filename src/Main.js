import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Written Questions</h1>
          <ul className="header">
            <li><NavLink to="/q1">Question 1</NavLink></li>
            <li><NavLink to="/q2">Question 2</NavLink></li>
            <li><NavLink to="/q3">Question 3</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/q1" component={Question1}/>
              <Route exact path="/q2" component={Question2}/>
                <Route exact path="/q3" component={Question3}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
