import React from 'react';
import Home from './Home';
import About from './About';
import { Link, NavLink } from 'react-router-dom';

class Services extends React.Component{
  render(){
    return(
      <div>
        <nav>
          <Link to = "/">Home </Link>
          <Link to = "/about">About Us</Link>
        </nav>
        <h1>Our Services</h1>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>
    )
  }
}

export default Services