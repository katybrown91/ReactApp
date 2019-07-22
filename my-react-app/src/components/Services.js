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
          <img src={"./image/mask.jpg"} alt="mask" width="300vw" height="250vh"/>
        <ul>
          <li>Reflexology</li>$60 <br></br> <br></br>
          <li>Manicure</li>$20 <br></br> <br></br>
          <li>Pedicure</li>$75 <br></br> <br></br>
          <li>Oxygen Facial</li>$40 <br></br> <br></br>
          <li>Swedish Massage</li>$75 <br></br> <br></br>
        </ul>
        <img src={"./image/lotion.jpg"} alt="lotion" width="300vw" height="250vh"/>
        </div>
      </div>
    )
  }
}

export default Services