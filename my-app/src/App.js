import React from "react";
import "./App.css";
import Login from "./components/Login";
import Users from "./components/Users";
import Signup from "./components/Signup";

import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <Link className="sign-btn" to="/signup">
        Sign Up
      </Link>
      <br />
      <Link className="login-btn" to="/login">
        Login
      </Link>
      <br />
      <Link className="users-btn" to="/users">
        all users
      </Link>
      <div className="App">
        <Route exact path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/users" component={Users} />
      </div>
    </Router>
  );
}

export default App;
