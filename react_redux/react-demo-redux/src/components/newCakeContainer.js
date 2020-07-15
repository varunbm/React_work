import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeAction";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of new cakes - </h2>
      <input
        type="text"
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCake: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
