import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" exact component={Home}></Route>
            <Route path="/about us" exact component={AboutUs}></Route>
            <Route path="/blog" exact component={Blog}></Route>
            <Route path="/contact" exact component={Contact}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
