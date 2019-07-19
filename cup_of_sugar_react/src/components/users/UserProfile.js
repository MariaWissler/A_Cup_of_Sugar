import React, { Component } from "react";
import axios from "axios";
//import UserProfileCard from "./UserProfileCard";
//import "./users.css";

export default class User extends Component {
//   state = {
//     user: [],
//     error: ""
//   };

//   componentDidMount() {
//     axios
//       .get("http://localhost:3000/api/user/")
//       .then(response => {
//         // throw Error("Failed to get products");
//         const { user } = response.data;
//         this.setState({ user });
//       })
//       .catch(error => {
//         this.setState({ error: error.message });
//       });
//   }

  render() {
    //const { error, user } = this.state;
    return (
      <div className="user">
        <p>This is a UserName</p>
      </div>
    );
  }
}