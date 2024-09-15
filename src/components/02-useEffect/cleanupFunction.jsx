import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle components
      </button>
      {toggle && <SomeComponernt />}
    </div>
  );
};

const SomeComponernt = () => {
  useEffect(() => {
    console.log("SomeComponernt");
  }, []);
  return <h3>Hello there</h3>;
};
export default CleanupFunction;
