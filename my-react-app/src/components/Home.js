import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Services from './Services';
import About from './About';

class Home extends React.Component{

  

  render(){
    return(
      <div>
        <div className="title">
        <h1>Spa</h1>
        </div>
        <nav>
        <Link to= "/services">Services</Link> <br></br>
        <Link to= "/about">About Us</Link>
        </nav>
        <img src = {"./image/spaimage.jpg"}  alt= "spa" width="250vw" height="250vh" />
        <img src = {"./image/rocks.jpg"} alt="rocks" width= "200vw" height="250vh" />
        <img src= {"./image/image3.jpg"} alt="flower with rocks" width="200vw" height="250vh" />
      </div>
    )
  }
}

export default Home