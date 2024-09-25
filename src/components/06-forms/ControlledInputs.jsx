import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <form className="form">
      <h4>Controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="form-input"
        />
      </div>
    </form>
  );
};
export default ControlledInputs;
