import React from "react";
import "./css/App.css";
import "./pages/index";
import { Switch, Route } from "react-router-dom";
import index from "./pages/index";
import login from "./pages/login";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={index} />
        <Route path="/login" component={login} />
      </Switch>
    </div>
  );
}

export default App;
