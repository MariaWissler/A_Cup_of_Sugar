import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserProfileCard";
//import "./users.css";

export default class User extends Component {
  state = {
   user: [],
     error: ""
   };

   componentDidMount() {
   axios
      .get("http://localhost:3000/api/users/59b380c0-a9bd-11e9-bbf8-89f7e6a1432d")
      .then(response => {
        // throw Error("Failed to get products");
        const { user } = response.data;
        this.setState({ user });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { error, user } = this.state;
    return (
      <div className="user">
        <UserCard key={user.id} user={user} />
      </div>
    );
  }
}