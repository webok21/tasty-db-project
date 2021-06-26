import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { Container } from "reactstrap";
import Categories from './components/Categories';
import SingleCategory from "./components/SingleCategory";
import Recipe from "./components/Recipe";
import SearchItem from "./components/SearchItem";



function App() {
  return (

    <Router>
      <Container>

        <Switch>
          <Header />
          </Switch>  
          <Switch>
          <Search/>
          <Route path="/search" exact component={Search} />
        </Switch>
        
        <Route path="/" exact component={Categories} />
        <Route path="/meals/:Id" component={SingleCategory} />
        <Route path="/recipe/:Id" component={Recipe} />

        <Switch>
          <Footer />
        </Switch>

      </Container>
    </Router>

  );
}

export default App;
