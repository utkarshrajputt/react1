import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Services" component={Services} />
            <Route exact path="/About" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
