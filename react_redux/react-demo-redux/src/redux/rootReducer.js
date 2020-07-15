import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import icecreamReducer from "./icecream/iceReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  users: userReducer,
});

export default rootReducer;
