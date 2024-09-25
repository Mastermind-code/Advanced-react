const ControlledInputs = () => {
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
          onChange={(e) => {}}
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
          onChange={(e) => {}}
          className="form-input"
        />
      </div>
    </form>
  );
};
export default ControlledInputs;
