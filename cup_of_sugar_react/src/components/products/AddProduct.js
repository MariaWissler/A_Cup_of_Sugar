import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "../../utils/axiosInstance";
import "./addproduct.css";
import { getUser } from "../../utils/auth";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      availability: true,
      image: ""
    };
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
    const { name, description, availability, image } = this.state;
    const { _id: userId } = getUser();

    const formData = new FormData();
    formData.append('image', image, image.name)
    formData.append('name', name);
    formData.append('description', description);
    formData.append('availability', availability);
    formData.append('addressId', "e0fdc890-ab81-11e9-94a7-bd0274314a8b")
    formData.append('userId', userId);
    
    axios
      .post("/api/products", formData)
      .then(response => {
        console.log(response.data);
        alert("proudct added successfully");
      })
      .catch(() => alert("something went wrong"));
  };

  render() {
    return (
      <div className="form">
        <h1>Add a product</h1>
        <Form onSubmit={this.addProduct}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="with a placeholder"
            />
          </FormGroup>

          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              id="description"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input
              type="file"
              onChange={this.handleChange}
              name="image"
              id="exampleFile"
            />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                checked={this.state.availability}
                type="checkbox"
                name="availability"
                onChange={this.handleChange}
              />{" "}
              Available
            </Label>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
