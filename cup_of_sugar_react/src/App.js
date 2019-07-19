import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel  from "./Carousel";
import Signup  from "./Signup";
import Navbar  from "./Navbar";
import './App.css';



class App extends Component {
    render() {
  
    return (
      <div className="App">
         <Carousel/>    
         <div className="app-title">
         <h1 className="join-community">Join the Community that makes a difference in  Food Waste</h1>
         <p>Most people waste more food than they think—here's how to fix it,
         a Cup of Sugar is a Seattle based App connecting neighbours with each other, 
         you just have to share it!</p>
         </div>
         <div className="form">
         <Signup className="form"></Signup>
         </div>
       </div>

    );
  }
}

export default App;
