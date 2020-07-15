import React from "react";
import useInput from "./useInput";

function UserForm() {
  const [firstname, bindFirstname, resetFirstname] = useInput("");
  const [lastname, bindLastname, resetLastname] = useInput("");
  let submitHandler = (event) => {
    event.preventDefault();
    alert(`Hello ${firstname} ${lastname}`);
    resetFirstname();
    resetLastname();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>firstname</label>
          <input name="firstname" {...bindFirstname} type="text" />
        </div>
        <div>
          <label>lirstname</label>
          <input name="lastname" {...bindLastname} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
