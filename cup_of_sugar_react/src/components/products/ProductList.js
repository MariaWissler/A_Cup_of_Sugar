import React, { Component } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./products.css";

export default class ProductList extends Component {
  state = {
    products: [],
    error: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/products")
      .then(response => {
        // throw Error("Failed to get products");
        const { products } = response.data;
        this.setState({ products });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { error, products } = this.state;
    return (
      <div className="products">
        {error ? (
          <h1>{error}</h1>
        ) : (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    );
  }
}
