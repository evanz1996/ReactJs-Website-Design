import React from "react";
import "./css/App.css";
import "./pages/index";
import { Switch, Route } from "react-router-dom";
import index from "./pages/index";
import login from "./pages/login";
import ChoosePlan from "./pages/ChoosePlan";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={index} />
        <Route path="/login" component={login} />
        <Route path="/choose-plan" component={ChoosePlan} />
      </Switch>
    </div>
  );
}

export default App;
