import React, { useState, useCallback } from "react";
import Title from "./Title";
import Display from "./Display";
import Button from "./Button";

function Parent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(20000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Display text="Age" display={age} />
      <Button handle={incrementAge}>Increment Age</Button>
      <Display text="Salary" display={salary}>
        Increment Salary
      </Display>
      <Button handle={incrementSalary}>Increment salary</Button>
    </div>
  );
}

export default Parent;
