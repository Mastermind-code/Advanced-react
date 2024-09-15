import { useState } from "react";

const ToggleChallenge = () => {
  const [isActive, setISActive] = useState(false);

  const toggleActive = () => {
    if (isActive) {
      setISActive(false);
    }
    setISActive(true);
  };

  return (
    <div>
      <button className="btn" onClick={toggleActive}>
        Are you active
      </button>
      {isActive && <Active />}
    </div>
  );
};

const Active = () => {
  return <h3>Hello world</h3>;
};

export default ToggleChallenge;
