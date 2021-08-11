import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "./components/user/User";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import { withRouter } from "react-router";
import { useState, useEffect } from "react";

function App() {
  const history = useHistory();
  let token = localStorage.getItem("token");

  const access = (name) => {
    console.log("token ::", localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      return name;
    } else {
      console.log("history", history);
      // history.push("/");
    }
  };

  // const sidebarAccess = (component) => {
  //   if (component === Login) {
  //     return <Redirect to="/login" />;
  //   } else {
  //     return <Redirect to="/Sidebar" />;
  //   }
  // };
  useEffect(() => {
    token = localStorage.getItem("token");
  }, [token]);

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        {token ? <Sidebar /> : null}

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={access(Dashboard)} />
          <Route exact path="/user" component={access(User)} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
