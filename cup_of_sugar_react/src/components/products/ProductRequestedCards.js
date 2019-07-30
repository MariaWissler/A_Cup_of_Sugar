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
       
       axios
         .get("/api/messages/" + request._id)
         .then(response => {
         //alert("You have messages!");
         this.setState({ mymessages: response.data});
         //const{ mymessages } = this.state;
         console.log({mymessages: response.data.messages});
         })
         .catch(error => {
            this.setState({ error: error.message });
          });
      }


  //we need a function to handleChange and message sent
  handleChange = e => {
    const elem = e.currentTarget;
    this.setState({ [elem.name]: elem.value });
  };

  sendMessage = (e, recipient) => {
    e.preventDefault();
    const sender = getUser().id;
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
      
        axios
    
        .get("/api/messages/" + request._id)
        .then(response => {
        //alert("You have messages!");
        this.setState({ mymessages: response.data});
        //const{ mymessages } = this.state;
        })
        .catch(error => {
           this.setState({ error: error.message });
         });
      })
      .catch(() =>{alert("failed to send message");});
  };


  render() {
    const { request } = this.props;
    const { mymessages } = this.props;
    
    const { id: userId } = getUser();
   

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
            { request.requestedBy._id !== userId ?(
               <CardText>Requested By: {request.requestedBy.name}
               </CardText>
            ):(
              <CardText>Requested By: Me</CardText>
            )}
            <CardText>Product: {request.name}</CardText>
            <CardText>Send a messsage:</CardText>
            
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
            <CardText>Conversation:</CardText>
           
            
            
              {
                this.state.mymessages.map(( message, index )=> (
                <CardText type="textarea">{message.body}</CardText>
                ))
              }
              
            
          </CardBody>
        </Card>
      </div>
    );
  }
}
