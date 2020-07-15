import { BUY_CAKE, ADD_CAKE } from "./cakeTypes";

const initialState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    case ADD_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload.number,
      };
    default:
      return state;
  }
};

export default cakeReducer;
