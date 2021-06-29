import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import '../css/ErrorBoundary.css'
import Categories from './Categories';


class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    
  }

  componentDidCatch(error) {
    console.log(error);
    
    this.setState({ hasError: true });
  }
  hideMe(){
    setTimeout(() => {
    document.getElementById("error").style.display="none";
    }, 5000);
}


  render() {
    if (this.state.hasError) {
     
      return <div>
        <Search/>
      <div id="error" className="error" onLoad={this.hideMe()}>
        <h1> Sorry! We didnt´t found that, but you can try this 
          <Link to="/random">Recipe
          </Link>. 
          </h1></div></div>
    }
    return this.props.children;
  }
};

export default ErrorBoundary;
