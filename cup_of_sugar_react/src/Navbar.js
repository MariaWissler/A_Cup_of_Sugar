import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import "./navbar.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "./utils/axiosInstance";
import { login, getUser, logout } from "./utils/auth";

class Navbar extends React.Component {
  handleLogout = () => {
    logout();
    this.props.history.push("/");
  };

  async getDataFromGoogle(responseGoogle, props) {
    const { profileObj } = responseGoogle;

    const emailFromGoogle = profileObj.email;
    try {
      const { data: emailResponse } = await axios.get(
        "/api/users/email/" + emailFromGoogle
      );
      if (emailResponse.user.length < 1) {
        const { data: userResponse } = await axios.post("/api/users", {
          userName: profileObj.givenName,
          name: profileObj.name,
          email: profileObj.email,
          image: profileObj.imageUrl
        });

        console.log(userResponse);

        if (userResponse.id) {
          login(userResponse);
          props.history.push("/userprofile");
        }
      } else {
        login(emailResponse.user[0]);
        props.history.push("/products");
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const check = getUser().email;

    return (
      <div className="navbar-div">
        {check ? (
          <div className="row">
          <div className="link-home">
            
            <Link to="/" className="nav-link">
            <i class="fas fa-home"></i>
              Home
            </Link>
            </div>
            <div className="row justify-content-end">
            <Link to="/products" className="nav-link">
              See Products
            </Link>
        
            <Link to="/addproduct" className="nav-link " >
              Add a Product
            </Link>

            <Link to="/userprofile" className="nav-link ">
              My profile
            </Link>

            <Link to="/myrequests" className="nav-link ">
              My Requests
            </Link>

            <Link to="/mypostings" className="nav-link ">
              My Posts
            </Link>

            <Link to="/mypostings" className="nav-link ">
            <i class="fas fa-search"></i>
            </Link>

            <GoogleLogout
              className="logout"
              buttonText="Logout"
              onLogoutSuccess={this.handleLogout}
            />
            </div>
          </div>
          
        ) : (
          <GoogleLogin
            className="signin"
            clientId="339017337645-hlraj5n2hhg82fdian7egn6ne8r63qcf.apps.googleusercontent.com"
            buttonText="Sign In"
            onSuccess={response => {
              this.getDataFromGoogle(response, this.props);
            }}
            onFailure={response => {
              console.log(response);
            }}
            cookiePolicy={"single_host_origin"}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Navbar);
