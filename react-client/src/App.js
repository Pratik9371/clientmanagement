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
import Services from "./Components/Services.js";
import OrdersForm from "./Components/OrdersForm.js";

function App() {
  return (
    <Router>
      <div>
        {/* Switch pages using react router */}
        <Switch>
          <Route path="/" exact component={LoginPage}></Route>
          <Route path="/form" component={ClientForm}></Route>
          <Route path="/client/:id" component={ClientForm}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/viewclients" component={ViewClients}></Route>
          <Route path="/welcome" component={Welcome}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/ordersform" component={OrdersForm}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
