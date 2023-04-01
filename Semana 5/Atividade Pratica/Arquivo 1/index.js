import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Form from "./pages/Form";
import Tables from "./pages/Tables";
import Arenas from "./pages/Arenas";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/form" component={Form} />
          <Route path="/tables" component={Tables} />
          <Route path="/arenas" component={Arenas} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
