import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstPage from "./Components/FirstPage/FirstPage";
import Second from './Components/SecondFolder/Second';

function App() {
  
  return (
    <Router>
      <Switch>
      <Route exact path="/Firstpage" component={FirstPage} />
      <Route exact path="/Secondpage" component={Second} />
      </Switch>
    </Router>
  );
}

export default App;
