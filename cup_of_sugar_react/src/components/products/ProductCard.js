import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const ProductCard = prop => {
  return (
    <div className="product-card">
      <Card>
        <CardImg
          top
          width="100%"
          src={`http://localhost:3000/${prop.product.image}`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{prop.product.name}</CardTitle>
          <CardText>
            {prop.product.availability ? "Available" : "Not Available"}
          </CardText>
          <CardText>{prop.product.description}</CardText>
          <Button>Request</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
