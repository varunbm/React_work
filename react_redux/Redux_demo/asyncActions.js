const redux = require("redux");
const axios = require("axios");
const thunkMiddleWare = require("redux-thunk").default;
const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;

//1) State
const initialState = {
  loading: false,
  users: [],
  errors: "",
};

// 2) Actions & actions creators
// Actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

// Action creators
const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchSuccess = (users) => {
  return {
    type: FETCH_SUCCESS,
    payload: users,
  };
};

const fetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error,
  };
};

// 3) Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_FAILURE:
      return {
        loading: [],
        error: action.payload,
        users: [],
      };
    default:
      return state;
  }
};

// 4) Create store
const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));

// 5) Define Async action creator
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFailure(err.message));
      });
  };
};

// 6) Subscribe to store and dispatch
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
