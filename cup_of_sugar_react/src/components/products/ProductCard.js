import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle
} from "reactstrap";
import { getUser } from "../../utils/auth";
import posed from 'react-pose';

class ProductCard extends Component {
  
  render() {
    const{ product } = this.props;
    const { _id: userId } = getUser();

    return (
      <div className="product-card">
        <Card className="product-card">
        
          <CardImg
            className="img-fluid"
            top
            width="90%"
            src={`http://localhost:3000/${product.image}`}
            class="img-fluid "
            style={{ height: 200 }}
            alt="Card image cap"
          />
        
          <CardBody className="products-posted-card">
            <CardText className="offer-text-title">{product.name}</CardText>
            <CardText className="offer-text">Posted By: {product.user.name}</CardText>
            <CardText className="offer-text">Description: {product.description}
            </CardText>
            <CardText className="offer-text">
              <i class="fas fa-walking" />
              {product.addressId}
            </CardText>
            {product.user._id !== userId && (
              <Button
                className="request-button"
                onClick={() => this.props.handleRequestProduct(product._id)}
              >
                Request
              </Button>
            )}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ProductCard;
