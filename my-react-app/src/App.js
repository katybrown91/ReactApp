import React from 'react';
import './App.css';
import { Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Services from './components/Services';
import About from './components/About';

class App extends React.Component {
  render(){
  return (

    <div className="App">
   
        <Switch>
       <Route exact path='/' component={Home} /> 
       <Route exact path='/services' component={Services} /> 
       <Route exact path='/about' component={About} /> 
       </Switch>
      </div>
      
      
    
  );
  }
}

export default App;
