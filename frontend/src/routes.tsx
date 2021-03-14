import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import GuestRoute from "./components/GuestRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import ChangePassword from "./pages/ChangePassword";
import Dashboard from "./pages/Dashboard";
import Forgot from "./pages/Forgot";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <GuestRoute path="/login" component={Login} />
        <GuestRoute path="/register" component={Register} />
        <GuestRoute path="/forgot" component={Forgot} />
        <GuestRoute path="/auth/reset" component={ChangePassword} />
      </Switch>
    </Router>
  );
};

export default Routes;
