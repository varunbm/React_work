import React from "react";
import CardComponent from "../cardComponent/cardComponent";
import Row from "react-bootstrap/Row";

const CardLists = (props) => {
  return (
    <Row>
      {props.data.map((profile) => (
        <CardComponent key={profile.id} data={profile} />
      ))}
    </Row>
  );
};

export default CardLists;
