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

const ProductCard = (prop) => {
  return (
    <div className="product-card">
      <Card>
        <CardImg
          top
          width="100%"
          src="https://starkist.com/sites/default/files/banner_images/category_page_CAN.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{ prop.product.name }</CardTitle>
          <CardText> 
            <p>Available</p>
          </CardText>
          <CardText>
            { prop.product.description }
          </CardText>
          <Button>Request</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
