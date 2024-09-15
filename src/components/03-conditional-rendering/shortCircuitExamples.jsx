import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "default value"}</h2>
      {text && (
        <div>
          <h2>whatever returns</h2>
          <h2>{name}</h2>
        </div>
      )}
      {!text && (
        <div>
          <h2>whatever returns</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <someComponent name={user.name} />}
      <h2 style={{ margin: "1 rem 0" }}>Ternary operator</h2>
      <button className="btn"> {isEditing ? "edit" : "add"}</button>
      {user ? (
        <div>
          <h4>hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
    </div>
  );
};

const someComponent = ({ name }) => {
  return (
    <div>
      <h2>whatever returns</h2>
      <h2>{name}</h2>
    </div>
  );
};
export default ShortCircuitExamples;
