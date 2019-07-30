import React, { Component } from "react";
import axios from "../../utils/axiosInstance";
//import MessageCard from "./UserProfileCard";
import { getUser } from "../../utils/auth";

export default class MyMessages extends Component {
    state = {
      mymessages: [],
      error: ""
    };
  
   componentDidMount() {
     
    const { _id: userId } = getUser();
       
       axios
         .get(`/api/users/${userId}/messages`)
         .then(response => {
         //alert("You have messages!");
         this.setState({ mymessages: response.data.messages});
         const{ mymessages } = this.state;
         console.log(`/api/users/${userId}/messages`);
         console.log({mymessages: response.data.messages});
         })
         .catch(error => {
            this.setState({ error: error.message });
          });
      }
  

    render() {
    //   const { error, myrequests } = this.state;
      return (
        <div className="products-requested">
          

         </div>
      );
     }
  }

  