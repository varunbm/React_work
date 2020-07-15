import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching1() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  const urlEndpoint = `https://jsonplaceholder.typicode.com/posts/${idFromButton}`;

  useEffect(() => {
    axios
      .get(urlEndpoint)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButton]);

  let changeHandler = (event) => {
    setId(event.target.value);
  };

  let handleClick = () => {
    setIdFromButton(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={changeHandler} />
      <button type="button" onClick={handleClick}>
        Fetch post
      </button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default DataFetching1;
