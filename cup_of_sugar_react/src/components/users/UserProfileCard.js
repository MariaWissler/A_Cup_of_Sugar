import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";


const UserCard = prop => {
  
  return (

    <div >
      <Card >
        <CardImg
          top
          width="100%"
          src={prop.currentUser.image}
          alt="Card image cap"
          style={{width: 150, height: 200}}
        />
        <CardBody>
          <CardTitle>My profile</CardTitle>
          <CardText>
            {prop.currentUser.userName}
          </CardText>
          <CardText>
          {prop.currentUser.name}
          </CardText>
          <CardText>
          {prop.currentUser.email}
          </CardText>
          <Button>Save</Button>
          <Button>Update</Button>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;