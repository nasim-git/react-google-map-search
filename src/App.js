import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home';

class App extends Component {
  render() {
      return (
          <Router>
              <Switch>
                <Route path="/" render={props => <Home {...props}/>} /> 
              </Switch>
          </Router>
      );
    }
}

export default App;