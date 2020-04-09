import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class CardComponent extends Component {
  state = {};
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.data.avatar_url} />
        <Card.Body>
          <Card.Title>{this.props.data.login}</Card.Title>
          <Card.Text>
            {this.props.data.company} <br />
            {this.props.data.bio}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default CardComponent;
