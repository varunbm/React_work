import { BUY_CAKE, ADD_CAKE } from "./cakeTypes";

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};

// export default buyCake;

export const addCake = () => {
  return {
    type: ADD_CAKE,
    payload: {
      number: 5,
    },
  };
};
