import React from "react";
import { connect } from "react-redux";
import { buyCake, addCake } from "../redux/cakes/cakeAction";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
      <button onClick={props.addCake}>Add cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(addCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
