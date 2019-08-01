import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "../../utils/axiosInstance";
import { getUser } from "../../utils/auth";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      availability: true,
      image: "",
      fileInputKey: Date.now(),
      address: ""
    };

    this.fileInput = React.createRef();
  }

  handleChange = e => {
    const elem = e.currentTarget;
    let value = "";

    console.log(elem.files);

    switch (elem.type) {
      case "checkbox":
        value = elem.checked;
        break;
      case "file":
        value = elem.files[0];
        break;
      default:
        value = elem.value;
        break;
    }

    this.setState({ [elem.name]: value });
  };

  addProduct = e => {
    e.preventDefault();
    const { name, description, availability, image, address} = this.state;
    const { id: userId } = getUser();

    const formData = new FormData();
    formData.append("image", image, image.name);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("availability", availability);
    formData.append("addressId", address);
    formData.append("userId", userId);

    axios
      .post("/api/products", formData)
      .then(response => {
        console.log(response.data);
        alert("proudct added successfully");
      })
      .catch(() => alert("something went wrong"));

    // call setState and initialize/set all values in state to be empty string
    this.setState({
      name: "",
      description: "",
      availability: true,
      image: "",
      fileInputKey: Date.now(),
      address: ""
    });
  };

  render() {
    return (
      <div className="form-addproduct">
        <Form onSubmit={this.addProduct}>
        <h1 className="add-product-title">
          Welcome to Sharing!
          </h1>
          <FormGroup>

            <Label for="name">
              <i class="fas fa-carrot" />
              Product
            </Label>
            <Input
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="What are you sharing today?"
            />
          </FormGroup>

          <FormGroup>
            <Label for="description">
              <i class="fas fa-pencil-alt" />
              Description
            </Label>
            <Input
              type="textarea"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              id="description"
              placeholder="Just a little bit about it"
            />
          </FormGroup>

          <FormGroup>
            <Label for="address">
              <i class="fas fa-hands" />
              Pick Up Area:
            </Label>
            <Input
              id="address"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              placeholder="Just your neighborhood"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleFile">
              <i class="fas fa-camera-retro" />
              File
            </Label>
            <Input
              type="file"
              onChange={this.handleChange}
              name="image"
              key={this.state.fileInputKey}
              id="exampleFile"
            />
            <FormText color="muted">
              Please submit and image of your product so others now what you are
              sharing!
            </FormText>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                checked={this.state.availability}
                type="checkbox"
                name="availability"
                onChange={this.handleChange}
              />
              Available
            </Label>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        <div className="people-fridge">
          <img src="https://i.ytimg.com/vi/OMnRRNIjw6Y/maxresdefault.jpg"
            style={{ height: 420, width: 650 }}/>
            <p className="comment">
              Did you know? Many countries have created a community fridge within their neighboords!
    
            </p>
          </div>
      </div>
    );
  }
}
