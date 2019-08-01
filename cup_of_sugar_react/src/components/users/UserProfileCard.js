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

    <div className="userProfile">
      
      <Card className="user-card">
        <CardImg
          className="profile-picture"
          top
          width="100%"
          src={prop.currentUser.image}
          alt="Card image cap"
          style={{height: 260}}
        />
        <CardBody style={{width: 250, height: 230}} className="user-data">
          
          
          <CardTitle className="title">
          <i class="far fa-user"><span> </span>
          My profile </i></CardTitle>
          <CardText className="user-data">
            Username: {prop.currentUser.userName}
          </CardText>
          <CardText className="user-data">
            Name: {prop.currentUser.name}
          </CardText>
          <CardText className="user-data">
           Your email: {prop.currentUser.email}
          </CardText>
          <Button >Update</Button>
        </CardBody>
      </Card>
         

    </div>
  );
};

export default UserCard;