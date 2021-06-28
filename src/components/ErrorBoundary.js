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
    <Search/>
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div className="error"><h1> Sorry! We didnt´t found that, but you can try this <Link to="/random">Recipe</Link>. </h1></div>
    }
    return this.props.children;
  }
};

export default ErrorBoundary;
