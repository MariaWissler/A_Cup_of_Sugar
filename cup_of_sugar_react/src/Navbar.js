import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Button } from 'reactstrap';
import {MDBIcon} from "mdbreact";


const Navbar = () => {
        return (
            <div className="navbar-div">
            <nav className="navbar navbar-expand-lg" >
                
                   <div className="nav-item">
                
                   <Link to="/" className="nav-link " ><MDBIcon icon="home" />Home</Link>
                    </div>
                    <div className="container justify-content-end">
                        <Link to="/products" className="nav-link ">See Products</Link>
                
                        <Link to="/addproduct" className="nav-link ">Add a Product</Link>
                    
                        <Link to="/userprofile" className="nav-link ">My profile</Link>
                    
                        <Link to="/userprofile" className="nav-link ">My messages</Link>
                    
                       <Button color="success" className="mr-4">Sign In</Button>{' '}
                
                       <Button color="warning" className="mr-4 ">Sign Up</Button>{' '}
                    </div>
                
            </nav>
            </div>
        );
    }


export default Navbar;