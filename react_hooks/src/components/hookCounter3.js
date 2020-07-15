import React, { useState } from "react";

function HookCounter3() {
  let obj = {
    firstName: "",
    lastName: "",
  };
  const [name, setName] = useState(obj);
  let changeHandler = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={name.firstName}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={name.lastName}
            onChange={changeHandler}
          />
        </div>
        <h2>
          First name is {name.firstName} and last name is {name.lastName}
        </h2>
      </form>
    </div>
  );
}

export default HookCounter3;
