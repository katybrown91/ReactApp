import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Services from './Services';

class Home extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li><NavLink to= "/services"></NavLink><h1>Services</h1> </li>
        </ul>
      </div>
    )
  }
}

export default Home