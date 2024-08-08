import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "john",
    age: 18,
    hobby: "likes to play football",
  });

  const newPerson = () => {
    setPerson({ name: "mike", age: 28, hobby: "like hill racing" });
  };
  return (
    <>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.hobby}</h4>
      <button type="button" className="btn" onClick={newPerson}>
        show mike
      </button>
    </>
  );
};

export default UseStateObject;
