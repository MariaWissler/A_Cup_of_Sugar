import React from "react";
import { Card, Button, CardImg, CardTitle, CardText, 
  CardBody } from 'reactstrap';

const ProductCard = prop => {
  return (
      <div className="product-card ">
        <Card className="card">
        <CardImg
          top
          width="90%"
          src={`http://localhost:3000/${prop.product.image}`}
          style={{  height: 250}}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{prop.product.name}</CardTitle>
          {/* <CardText>
            {prop.product.availability ? "Available" : "Not Available"}
          </CardText> */}
          <CardText>{prop.product.description}</CardText>
          {/* <CardText>{prop.address.neighborhood}</CardText> */}
        <Button>Request</Button>
        </CardBody>
        </Card>

     </div>
  );
};

export default ProductCard;
