import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel  from "./Carousel";
//import Signup  from "./Signup";
import './App.css';
import FooterPage from './Footer';


class App extends Component {
    render() {
  
    return (
      <div className="App">
        
         <Carousel/>   
         
         <div className="app-title">
         <h1 className="join-community">Join the Community that Reduces Food Waste!</h1>
 
         </div>
         <div>
           <FooterPage/>
         </div>
       </div>

    );
  }
}

export default App;
