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
        <div className = "services">
        <ul>
          <li>Service 1</li>$55 <br></br> <br></br>
          <li>Service 2</li>$60 <br></br> <br></br>
          <li>Service 3</li>$75 <br></br> <br></br>
          <li>Service 4</li>$120 <br></br> <br></br>
          <li>Service 5</li>$40 <br></br> <br></br>
        </ul>
        </div>
      </div>
    )
  }
}

export default Services