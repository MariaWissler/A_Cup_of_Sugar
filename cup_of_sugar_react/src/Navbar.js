import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
//import { Button } from 'reactstrap';
import GoogleLogin from 'react-google-login';

class Navbar extends React.Component {
    // getDataFromGoogle(response){
    //     var emailFromGoogle=response.profileObj.email;
    //     fetch('http://localhost:3000/api/user/email/'+emailFromGoogle)
    //     .then(response => response.json())
    //     .then(function(user){
    //     if(user.registros.length<1){//No existe
    //     fetch('http://localhost:3000/api/user', {
    //     method: 'POST',
    //     headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //     userName:response.profileObj.googleId,
    //     name:response.profileObj.name,
    //     email:response.profileObj.email
    //     })
    //     }).then(function(response){
    //     if(response.status===200){
    //     localStorage.setItem("userLoggedIn",true);
    //     //redirect to UserPage
    //     }
    //     });
    //     }
    //     else{//Exist
    //     localStorage.setItem("userLoggedIn",true);
    //     //redirect to product page
    //     }
    //     });
    //     }
        
        render() {
            return (
            <div className="navbar-div">
            <nav className="navbar navbar-expand-lg" >
                
                   <div className="nav-item">
                
                   <Link to="/" className="nav-link ">Home</Link>
                    </div>
                    <div className="container justify-content-end">
                        <Link to="/products" className="nav-link ">See Products</Link>
                
                        <Link to="/addproduct" className="nav-link ">Add a Product</Link>
                    
                        <Link to="/userprofile" className="nav-link ">My profile</Link>
                    
                        <Link to="/userprofile" className="nav-link ">My messages</Link>
                    
                       {/* <Button color="success" className="mr-4">Sign In</Button>{' '}
                       
                       <Button color="warning" className="mr-4 ">Sign Up</Button>{' '} */}

                       <GoogleLogin
                        clientId="151276409315-cni77iaenffdlp1hgr1sc1h4rp22qsss.apps.googleusercontent.com"
                        buttonText="Sign In"
                        onSuccess={(response)=>{this.getDataFromGoogle(response)}}
                        onFailure={(response)=>{console.log(response)}}
                        cookiePolicy={'single_host_origin'}/>

                    </div>
                
            </nav>
            </div>
        );
    }
}


export default Navbar;