import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import '../css/ErrorBoundary.css'


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
    }, 7000);
}


  render() {
    if (this.state.hasError) {
     
      return <div>
        <Search/>
      <div id="error" className="error border-radius" onLoad={this.hideMe()}>
        <h3> Sorry! No tasty result, but you can try this:
        </h3>
          <div>
          <Link to="/random">
          <button id="errorbutton">Gimme one</button>
          </Link>
          </div>
          </div>
          </div>
    }
    return this.props.children;
  }
};

export default ErrorBoundary;
