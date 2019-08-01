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
  Form,
  FormGroup,
  Label
} from "reactstrap";
import axios from "../../utils/axiosInstance";
import { getUser } from "../../utils/auth";

export default class ProductRequestedCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      mymessages: [],
      error: ""
    };
  }

  componentDidMount() {
    const { request } = this.props;
    this.getMessages(request);

    setInterval(() => {
      this.getMessages(request);
    }, 10000);
  }

  getMessages = request => {
    axios
      .get("/api/messages/" + request._id)
      .then(response => {
        //alert("You have messages!");
        this.setState({ mymessages: response.data });
        //const{ mymessages } = this.state;
        console.log({ mymessages: response.data.messages });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  //we need a function to handleChange and message sent
  handleChange = e => {
    const elem = e.currentTarget;
    this.setState({ [elem.name]: elem.value });
  };

  sendMessage = (e, recipient) => {
    e.preventDefault();
    const sender = getUser()._id;
    const { request } = this.props;
    const { message } = this.state;
    if (!message) return;

    axios
      .post("/api/messages", {
        from: sender,
        to: recipient._id,
        body: message,
        productId: request._id
      })
      .then(() => {
        alert("msg sent successfully");
        this.getMessages(request);
      })
      .catch(() => {
        alert("failed to send message");
      });
  };

  render() {
    const { request } = this.props;
    const { mymessages } = this.props;

    const { _id: userId } = getUser();

    return (
      <div className="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              className="request-picture"
              top
              width="90%"
              src={`http://localhost:3000/${request.image}`}
              style={{ height: 240 }}
              alt="Card image cap"
            />
          </div>
          <div class="card-body">
            <div class="col-md-8">
              {request.requestedBy._id !== userId ? (
                <CardText className="cardtext">
                  Requested By: {request.requestedBy.name}
                </CardText>
              ) : (
                <CardText className="cardtext">
                  <i class="fas fa-hand-holding-heart" />
                  My offer 
                </CardText>
              )}
              <CardText className="cardtext">
                <i class="fas fa-carrot" />
                {request.name}
              </CardText>
            </div>
            <CardText className="cardtext-chat"><i class="far fa-smile"></i>
              <span> </span>Sharing Chat:
            </CardText>
            <div className="conversation-div">
              {this.state.mymessages.map((message, index) => (
                <p className="textarea-chat">{message.body}</p>
             
              ))}
            </div>
            <Form
              className="chat-form"
              onSubmit={e => this.sendMessage(e, request.requestedBy)}
            >
              <CardText className="cardtext">Send a messsage:</CardText>
              <InputGroup>
                <Input
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
                <InputGroupAddon addonType="append">
                  <Button className="send">Send</Button>
                 
                </InputGroupAddon>
              </InputGroup>
            </Form>
            <div className="row">
            <CardText className="cardtext-complete"><i class="fas fa-check"></i>Complete</CardText>
            <CardText className="cardtext-trash"><i class="fas fa-trash-alt"></i>Delete</CardText>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
