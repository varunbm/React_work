import React from "react";

let UserContext = React.createContext();

let Provider = UserContext.Provider;
let Consumer = UserContext.Consumer;

export { Provider, Consumer };
export default UserContext;
