import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { task, getTomorrowDate } from "./utils/helpers";

import About from "./pages/About";
import Home from "./pages/Home";

import "./styles/App.scss";

function App() {
  useEffect(() => {
    task(false).then(console.log);

    let tomorrow = getTomorrowDate();
    console.log({ tomorrow });
  });

  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
