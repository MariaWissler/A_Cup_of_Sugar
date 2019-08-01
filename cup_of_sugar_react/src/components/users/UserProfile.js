import React, { Component } from "react";
import axios from "../../utils/axiosInstance";
import UserCard from "./UserProfileCard";
import { getUser } from "../../utils/auth";
import "./users.css";


export default class User extends Component {
   state = {
      currentUser: [],
      error:""
    };


   componentDidMount() {
    const currentUserEmail = getUser().email;
   
    axios
      .get("/api/users/email/" + currentUserEmail)
      .then(response => {       
        this.setState({ currentUser:response.data.user[0] });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { currentUser = {} } = this.state;
    return (
      <div>
        
       <div className="user">
         <UserCard currentUser={currentUser} />  
        <div className="people">
        <img  src="https://www.frometowncouncil.gov.uk/wp-content/uploads/2016/08/ali-fridge.jpg"
          style={{ height: 475, width: 700 }}/>
          <p className="comment">
          Remember, you can always request and share food!
          </p>
        </div>
        </div>
        </div>
    );
  }
}