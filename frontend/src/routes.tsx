import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import GuestRoute from "./components/GuestRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import ChangePassword from "./pages/ChangePassword";
import Dashboard from "./pages/Dashboard";
import Forgot from "./pages/Forgot";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProvider from "./contexts/UserProvider";
import UpdateUser from "./pages/UpdateUser";


const Routes: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" component={Dashboard} />
          <ProtectedRoute path="/user" component={UpdateUser} />

          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={Register} />
          <GuestRoute path="/forgot" component={Forgot} />
          <GuestRoute path="/auth/reset" component={ChangePassword} />
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default Routes;
