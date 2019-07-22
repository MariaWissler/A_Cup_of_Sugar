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

const UserCard = (prop) => {
  return (
    <div className="user-card">
      <Card>
        <CardImg
          top
          width="100%"
          src="https://steamuserimages-a.akamaihd.net/ugc/88218951569919284/E6EDFCD991421F636DC02DD43E30AFBAF27E1E79/"
          alt="Card image cap"
          style={{width: 150, height: 200}}
        />
        <CardBody>
          <CardTitle>{ prop.user.name }</CardTitle>
          <CardText>
            { prop.user.userName }
          </CardText>
          <Button>this is a user</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;