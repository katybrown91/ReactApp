import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Services from './Services';
import About from './About';

class Home extends React.Component{

  

  render(){
    return(
      <div>
        <h1>Business Title</h1>
        <nav>
        <Link to= "/services">Services</Link> <br></br>
        <Link to= "/about">About Us</Link>
        </nav>
        <img src = {"./image/spaimage.jpg"}  alt= "spa" width="30%"/>
      </div>
    )
  }
}

export default Home