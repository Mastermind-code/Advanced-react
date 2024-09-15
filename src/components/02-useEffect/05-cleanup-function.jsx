import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setToggle(true);
        }}
      ></button>
      {toggle && <randomComponernt />}
    </div>
  );
};

const randomComponernt = () => {
  return <h3>Hello there</h3>;
};
export default CleanupFunction;
