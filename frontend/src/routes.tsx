import React from 'react';

import {BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ChangePassword from './pages/ChangePassword';
import Forgot from './pages/Forgot';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserContext } from './providers/UserProvider';

const Routes: React.FC = () => {
  const {token} = React.useContext(UserContext);



  return (
    <Router>
      <Switch>
        <Route exact path="/"><Login/></Route>
        <Route path="/register"><Register/></Route>
        <Route path="/forgot"><Forgot/></Route>
        <Route path="/auth/reset"><ChangePassword/></Route>
      </Switch>
    </Router>
  );
}

export default Routes;