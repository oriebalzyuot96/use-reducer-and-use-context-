import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import "./lib/font-awesome/css/all.min.css";
//import '~font-awesome/css/font-awesome';
//import { FontAwesomeIcon } from "@fortawesome/react-fortawesome";
//  import '~font-awesome/css/font-awesome';
// import '~font-awesome/scss/font-awesome'; 
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>

          <Route path="/add"> <Add /> </Route>
           
         
          <Route path="/watched">
            <Watched />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;