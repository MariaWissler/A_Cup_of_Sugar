import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  InputGroup,
  InputGroupAddon,
  Input,
  Form
} from "reactstrap";
import axios from "../../utils/axiosInstance";
import { getUser } from "../../utils/auth";

export default class ProductRequestedCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      response: "",
      error: ""
    };
  }

  //we need a function to handleChange and message sent
  handleChange = e => {
    const elem = e.currentTarget;
    this.setState({ [elem.name]: elem.value });
  };

  sendMessage = (e, recipient) => {
    e.preventDefault();
    const sender = getUser().id;

    const { message } = this.state;
    if (!message) return;

    axios
      .post("/api/messages", {
        from: sender,
        to: recipient._id,
        body: message
      })
      .then(() => alert("msg sent successfully"))
      .catch(() => alert("failed to send message"));
  };

  render() {
    const { request } = this.props;
    //const { id: userId } = getUser();

    return (
      <div className="product-card ">
        <Card className="card">
          <CardImg
            top
            width="90%"
            src={`http://localhost:3000/${request.image}`}
            style={{ height: 250 }}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Your requests</CardTitle>
            <CardText>Requested By: {request.requestedBy.name}</CardText>
            <CardText>Your Offer: {request.name}</CardText>
            <CardText>Send a message:</CardText>

            <Form onSubmit={e => this.sendMessage(e, request.requestedBy)}>
              <InputGroup>
                <Input
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
                <InputGroupAddon addonType="append">
                  <Button color="secondary">Send</Button>
                </InputGroupAddon>
              </InputGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
