import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <div className="conatiner">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}
export default App;
