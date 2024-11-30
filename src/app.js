import React from "react";
import "./App.css"; // Global styling for the app
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Store from "./components/Store";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/store" component={Store} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
