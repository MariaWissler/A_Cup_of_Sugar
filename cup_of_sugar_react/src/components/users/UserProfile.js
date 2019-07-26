import React, { Component } from "react";
import axios from "../../utils/axiosInstance";
import UserCard from "./UserProfileCard";
import { getUser } from "../../utils/auth";


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
       <div className="user">
         <UserCard currentUser={currentUser} />  
       </div>
    );
  }
}