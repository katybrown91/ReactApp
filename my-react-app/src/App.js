import React from 'react';
import './App.css';
import { Link, NavLink } from 'react-router-dom'
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render(){
  return (

    <div className="App">
       <Route exact path='/' component={Home} /> 
      </div>
      
      
    
  );
  }
}

export default App;
