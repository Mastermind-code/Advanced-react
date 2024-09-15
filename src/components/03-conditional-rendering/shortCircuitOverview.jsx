import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("susan");

  return (
    <>
      <h4>falsy OR: {text || "hello world"}</h4>
      <h4>falsy AND: {text && "hello world"}</h4>
      <h4>truty OR: {name || "hello world"} </h4>
      <h4>truty AN D: {name && "hello world"}</h4>
      <h2>short circuit overview</h2>
    </>
  );
};
export default ShortCircuitOverview;
