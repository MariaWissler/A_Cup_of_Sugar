import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import "./navbar.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "./utils/axiosInstance";
import { login, getUser, logout } from "./utils/auth";

//import config from './config.json';

class Navbar extends React.Component {
  handleLogout = () => {
    logout();
    this.props.history.push("/");
  };

  async getDataFromGoogle(responseGoogle, props) {
    const { profileObj } = responseGoogle;

    const emailFromGoogle = profileObj.email; // end of response from Google
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

    // axios("/api/users/email/" + emailFromGoogle) // we need to get the user from the data base based on the user email
    //   .then(function(userCallbackResponse) {
    //     // leave callback on user variable
    //     if (userCallbackResponse.user.length < 1) {
    //       // Validate if user exist or not
    //       fetch("http://localhost:3000/api/users", {
    //         method: "POST",
    //         headers: {
    //           Accept: "application/json",
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //           userName: responseGoogle.profileObj.givenName,
    //           name: responseGoogle.profileObj.name,
    //           email: responseGoogle.profileObj.email
    //           //profileImage: response.profileObj.imageUrl
    //         })
    //       }).then(function(responseInternalFetch) {
    //         console.log(responseInternalFetch);

    //         if (responseInternalFetch.status === 200) {
    //           localStorage.setItem("userLoggedIn", true);
    //           localStorage.setItem(
    //             "currentEmail",
    //             responseInternalFetch.user.email
    //           );
    //           props.history.push("/userprofile");
    //         }
    //       });
    //     } else {
    //       // if User is on DataBase

    //       localStorage.setItem("userLoggedIn", true); // variable and value
    //       localStorage.setItem(
    //         "currentEmail",
    //         userCallbackResponse.user[0].email
    //       );
    //       props.history.push("/products");
    //     }
    //   });
  }

  render() {
    const check = getUser().email;

    return (
      <div className="navbar-div">
        {check ? (
          <div className="row">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/products" className="nav-link justify-content-end">
              See Products
            </Link>

            <Link to="/addproduct" className="nav-link ">
              Add a Product
            </Link>

            <Link to="/userprofile" className="nav-link ">
              My profile
            </Link>

            <Link to="/myrequests" className="nav-link ">
              My Requests
            </Link>


            <Link to="/mymessages" className="nav-link ">
              Messages
            </Link>

            <GoogleLogout
              buttonText="Logout"
              onLogoutSuccess={this.handleLogout}
            />
          </div>
        ) : (
          <GoogleLogin
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
