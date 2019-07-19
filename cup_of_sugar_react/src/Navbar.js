import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
        return (
            <div className="navbar-div">
            <nav className="navbar navbar-expand-lg ">
                   <div className="nav-item">
                        <Link to="/" className="nav-link ">Home</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/products" className="nav-link ">See Products</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/addproduct" className="nav-link ">Add a Product</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/userprofile" className="nav-link ">My profile</Link>
                    </div>
            </nav>
            </div>
        );
    }


export default Navbar;