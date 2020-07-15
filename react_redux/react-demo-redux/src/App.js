import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
// import CakeContainer from "./components/cakeContainer";
// import HooksCakeContainer from "./components/hooksCakeContainer";
// import IcecreamContainer from "./components/icecreamContainer";
// import NewCakeContainer from "./components/newCakeContainer";
// import ItemContainer from "./components/itemContainer";
import UserContainer from "./components/userContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HooksCakeContainer />
        <IcecreamContainer />
        <NewCakeContainer />
        <ItemContainer value="iceCream" /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
