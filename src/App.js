import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "reactstrap";
import Categories from './components/Categories';
import SingleCategory from "./components/SingleCategory";
import Recipe from "./components/Recipe";
import Random from "./components/Random";
import ErrorBoundary from "./components/ErrorBoundary";
import Search from "./components/Search";

function App() {
  return (

    <Router>

      <Container>
       
        <Header/> 
        <ErrorBoundary>
        <Search />
        </ErrorBoundary>
        <Switch>
        <Route path="/" exact component={Categories} />



          {/* <Route path="/random" component={Search2} /> */}
          <Route path="/random" component={Random} />

          {/* <Route path="/meals/:Id" component={Search3} /> */}
          <Route path="/meals/:Id" component={SingleCategory} />

          {/* <Route path="/recipe/:Id" component={Search4} /> */}
          <Route path="/recipe/:Id" component={Recipe} />
          
        </Switch>

        <Footer />

      </Container>
    </Router>
   
  );
}

export default App;
