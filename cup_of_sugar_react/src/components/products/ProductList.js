import React, { Component } from "react";
import axios from "../../utils/axiosInstance";
import ProductCard from "./ProductCard";
import "./products.css";
import { getUser } from "../../utils/auth";

export default class ProductList extends Component {
  state = {
    products: [],
    error: ""
  };

  componentDidMount() {
    axios
      .get("/api/products")
      .then(response => {
        // throw Error("Failed to get products");
        const { products } = response.data;
        this.setState({ products });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  requestProduct = productId => {
    const { id } = getUser();
    
    axios
      .post(`/api/products/${productId}/requests`, {
        userId: id
      })
      .then(() => {
        alert("request addedd");
        const { products } = this.state;
        const newProducts = products.filter(product => {
          return product._id !== productId;
        });

        this.setState({ products: newProducts });
      })
      .catch(() => alert("failed to request product"));
  };

  render() {
    const { error, products } = this.state;
    return (
      <div className="products">
        {error ? (
          <h1>{error}</h1>
        ) : (
          products.map(product => (
            <ProductCard
              key={product._id}
              handleRequestProduct={this.requestProduct}
              product={product}
            />
          ))
        )}
      </div>
    );
  }
}
