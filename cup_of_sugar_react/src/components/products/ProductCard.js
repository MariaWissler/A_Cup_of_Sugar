import React, { Component } from "react";
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { getUser } from "../../utils/auth";

class ProductCard extends Component {
  // const requestProduct = event => {
  //   const selectedProduct = event.target.getAttribute("data-productid"); // here lives the id for the product
  //   console.log(event.target.getAttribute("data-productid"));
  //   alert("This has been requested");
  //   // get
  //   // post
  // }

  render() {
    const { product } = this.props;
    const { _id: userId } = getUser();

    return (
      <div className="product-card ">
        <Card className="card">
          <CardImg
            top
            width="90%"
            src={`http://localhost:3000/${product.image}`}
            style={{ height: 250 }}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{product.name}</CardTitle>
            <CardText>Posted: {product.user.name}</CardText>
            <CardText>{product.description}</CardText>
            {/* <CardText>{address.neighborhood}</CardText> */}
            { product.user._id !== userId && <Button onClick={() => this.props.handleRequestProduct(product._id)}>
              Request
            </Button>
            }
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ProductCard;
