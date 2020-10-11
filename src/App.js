import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";

import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/pages/About";
import Projectpage from "./components/Projectpage";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header title="PORTFOLIO" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Projects} />
              <Route exact path="/projects/:id" component={Projectpage} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
