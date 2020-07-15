import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { UserContext, ChannelContext } from "../App";

function ComponentB() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} and {channel}
      <ComponentC />
    </div>
  );
}

export default ComponentB;
