import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import App from "../App";
import ProductList from "../components/products/ProductList";
import AddProduct from "../components/products/AddProduct";
import UserProfile from "../components/users/UserProfile";
import ProductsRequested from "../components/products/ProductsRequested";
import Navbar from "../Navbar";


export default class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/products" component={ProductList} />
          <Route path="/userprofile" component={UserProfile} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/myrequests" component={ProductsRequested}/>
        </Switch>
      </Router>
    );
  }
}
