import React from "react";
import { connect } from "react-redux";
function ItemContainer(props) {
  return (
    <div>
      <h2> Item - {props.item}</h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState =
    ownProps.value === "cake"
      ? state.cake.numberOfCakes
      : state.icecream.numberOfIcecreams;

  return {
    item: itemState,
  };
};

export default connect(mapStateToProps)(ItemContainer);
