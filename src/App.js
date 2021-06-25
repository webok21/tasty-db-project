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
<<<<<<< HEAD
    
      <Router>
        <Container>
          
          
          <Header />
          
          
          
          <Search />
          
          <Switch>
=======
>>>>>>> 8fa69dbaebf7326fe494df8c28a98574c609cc5c

    <Router>
      <Container>



        <Header />






        <Search />

        <Switch>
          <Route path="/" exact component={Categories} />
          <Route path="/meals/:Id" component={SingleCategory} />
<<<<<<< HEAD
          
          </Switch>
          <Footer />
          
          
        </Container>  
      </Router>
  
=======
        </Switch>
        <Footer />
      </Container>
    </Router>

>>>>>>> 8fa69dbaebf7326fe494df8c28a98574c609cc5c
  );
}

export default App;
