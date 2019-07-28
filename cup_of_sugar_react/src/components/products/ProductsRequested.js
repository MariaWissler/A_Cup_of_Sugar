import React, { Component } from "react";
import axios from "../../utils/axiosInstance";
import ProductRequestedCard from "./ProductRequestedCards";
import "./products.css";
import { getUser } from "../../utils/auth";

export default class ProductsRequested extends Component {
  state = {
    myrequests: [],
    error: ""
  };

 componentDidMount() {
   const { id: userId } = getUser();

     axios
       .get(`/api/products/${userId}/requests`)
       .then(response => {         
         this.setState({ myrequests:response.data.currentUserProducts});
         const{ myrequests } = this.state;
         console.log(myrequests);
       })
       .catch(error => {
         this.setState({ error: error.message });
       });//
   }


  render() {
    const { error, myrequests } = this.state;
    return (
      <div className="products-requested">
        
        {error ? (
          <h1>{error}</h1>
        ) : (
        // my requests is the array, the request is each object in the array we ara passing to create a card 
          myrequests.map(request => (
            <ProductRequestedCard
              key={request._id}
              request={request}
            />
         ))
        )}
      </div>
    );
  }
}