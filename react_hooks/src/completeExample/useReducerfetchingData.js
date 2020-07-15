import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "Error":
      return {
        loading: false,
        error: action.payload,
        post: {},
      };
    default:
      return state;
  }
};

function UseReducerFetchingData() {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        dispatch({ type: "Success", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "Error", payload: err });
      });
  }, []);
  return (
    <div>
      {state.loading ? "loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default UseReducerFetchingData;
