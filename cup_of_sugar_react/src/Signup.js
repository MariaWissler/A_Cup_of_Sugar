import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Signup extends React.Component {
  render() {
    return (

      <Form className="d-inline-block">
          
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <p>Sign up!</p>
        <Button>Gmail</Button>
        <p>Returning Users Here</p>
          <Label  className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Your Email here" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <p></p>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Signup;