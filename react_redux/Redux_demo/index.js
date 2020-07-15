// 1) Create a store
// 2) Declare the init state and reducer
// 3) Define action and action creators
// 4) Subscribe to the store
// 5) Dispatch actions to update the store
// 6) unsubscribe

const redux = require("redux");
const redux_logger = require("redux-logger");

const logger = redux_logger.createLogger();
const create_store = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
//Action is an object with type property.
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAMS = "BUY_ICECREAMS";
//Action creator, simple creates an action
// A function that returns an action

function buy_cake() {
  return {
    type: BUY_CAKE,
    payload: "First redux action",
  };
}

function buy_icecreams() {
  return {
    type: BUY_ICECREAMS,
    payload: "Buy icecreams",
  };
}

// Reducers
// Reducers specify how the application state changes in response to actions
// action describes what happens, reducers in charge what to do.
// Reducers is a function which aceepts state and action, returning a new stat

// (previousState, action) => newState

const initCakeState = {
  numberOfCakes: 10,
};

const initIceCreameState = {
  numberOfIceCreams: 20,
};

const cakeReducer = (state = initCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

const IceReducer = (state = initIceCreameState, action) => {
  switch (action.type) {
    case BUY_ICECREAMS:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    default:
      return state;
  }
};

//Combine reducers
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCreame: IceReducer,
});

//Store
// One store for entire application
const store = create_store(rootReducer, applyMiddleware(logger));
console.log(`Init state`, store.getState());

const unsubscribe = store.subscribe(() => {
  //   console.log(`Updated state`, store.getState());
});

store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_icecreams());
store.dispatch(buy_icecreams());
unsubscribe();
