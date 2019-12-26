import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClientForm from "./Components/ClientForm";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact.js";
import About from "./Components/About.js";
import NavBar from "./Components/NavBar.js";
import ViewClients from "./Components/ViewClients.js";
import Welcome from "./Components/Welcome.js";
import Orders from "./Components/Orders.js";
import OrdersForm from "./Components/OrdersForm.js";
import Sample from "./Components/Sample.js";

function App() {
  return (
    <Router>
      <div>
        {/* Switch pages using react router */}
        <Switch>
          <Route path="/" exact component={LoginPage}></Route>
          <Route path="/form" component={ClientForm}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/viewclients" component={ViewClients}></Route>
          <Route path="/welcome" component={Welcome}></Route>
          <Route path="/orders" component={Orders}></Route>
          <Route path="/ordersform" component={OrdersForm}></Route>
          <Route path="/sample" component={Sample}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
