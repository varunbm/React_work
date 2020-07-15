import React from "react";
import "./App.css";
// import LifeCycle from "./components/LifeCycle";
// import ParentRefExample from "./components/parentRefExample";
import CountCompo from "./components/countCompo";
import MouseHover from "./components/mouseHover";
import ErrorHandling from "./components/errorHandling";
import ClickCounter from "./components/renderProps/clickCounter";
import HoverCounter from "./components/renderProps/hoverCounter";
import User from "./components/renderProps/user";
import Counter from "./components/renderProps/counter";
import ComponentA from "./components/contex/componentA";
import { Provider } from "./components/contex/context";
import PostList from "./components/http/postListGet";
import PostListPost from "./components/http/postListPost";
// import Welcome from "./components/welcome";
// import Hello from "./components/hello";
// import Message from "./components/message";
// import ParentComp from "./components/parentComp";
// import Condi from "./components/condi";
// import Form from "./components/form";

function App() {
  return (
    <div className="App">
      {/* <ParentRefExample /> */}
      <CountCompo name="Varun" />
      <ErrorHandling>
        <MouseHover />
      </ErrorHandling>

      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <User name={(isLoggedIn) => (isLoggedIn ? "Varun" : "Guest")} /> */}

      <Counter
        render={(count, clickHandler) => (
          <ClickCounter count={count} clickHandler={clickHandler} />
        )}
      />

      <Counter
        render={(count, clickHandler) => (
          <HoverCounter count={count} clickHandler={clickHandler} />
        )}
      />

      <Provider value="Varun">
        <ComponentA />
      </Provider>

      {/* <PostList /> */}
      <PostListPost />
      {/* <LifeCycle /> */}
      {/* <Form /> */}
      {/* <Condi /> */}
      {/* <ParentComp /> */}
      {/* <Message /> */}
      {/* <Welcome name="Varun">
        <p>Spouse name is Sujatha </p>
      </Welcome>
      <Welcome name="Bob" />
      <Welcome name="John" />
      <Hello name="Cool" /> */}
    </div>
  );
}

export default App;
