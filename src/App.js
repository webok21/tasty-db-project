import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { Container } from "reactstrap";
import Categories from './components/Categories';
import SingleCategory from "./components/SingleCategory";

function App() {
  return (
    
      <Router>
        <Container>
          
          <Switch>
          <Header />
          </Switch>

          <Route path="/" exact component={Categories} />
          <Route path="/meals/:Id" component={SingleCategory} />
          
        </Container>  
      </Router>
  
  );
}

export default App;
