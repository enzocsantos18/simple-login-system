import React from 'react';

import {BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Forgot from './pages/Forgot';
import Login from './pages/Login';
import Register from './pages/Register';


const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Login/></Route>
        <Route path="/register"><Register/></Route>
        <Route path="/forgot"><Forgot/></Route>
      </Switch>
    </Router>
  );
}

export default Routes;