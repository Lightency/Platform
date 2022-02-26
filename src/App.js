import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/mainAdminLayout/mainLayout";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin" component={MainLayout} />
      </Switch>
    </div>
  );
}

export default App;
