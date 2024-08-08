import { useState } from "react";

const UseStateGotcha = () => {
  const [click, onClick] = useState(0);

  const increaseOnClick = () => {
    onClick(click + 1);

    console.log(click);
  };
  return (
    <>
      <h4>{click}</h4>
      <button type="button" className="btn" onClick={increaseOnClick}>
        increse
      </button>
    </>
  );
};

export default UseStateGotcha;
