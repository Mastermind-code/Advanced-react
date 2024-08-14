import { useState } from "react";
// using timeouts: such that it only takes a single state during thr timeout duration
// const UseStateGotcha = () => {
//   const [click, onClick] = useState(0);

//   const increaseOnClick = () => {
//     onClick(click + 1);

//     console.log(click);
//   };
//   return (
//     <>
//       <h4>{click}</h4>
//       <button type="button" className="btn" onClick={increaseOnClick}>
//         increse
//       </button>
//     </>
//   );
// };

// const UseStateGotcha = () => {
//   const [click, onClick] = useState(0);

//   const increaseOnClick = () => {
//     setTimeout(() => {
//       onClick(click + 1);
//     }, 3000);

//     console.log(click);
//   };
//   return (
//     <>
//       <h4>{click}</h4>
//       <button type="button" className="btn" onClick={increaseOnClick}>
//         increse
//       </button>
//     </>
//   );
// };

// to fix this, the onclick function is set as a function which operates and update the value of click during the time interval.

const UseStateGotcha = () => {
  const [click, onClick] = useState(0);

  const increaseOnClick = () => {
    setTimeout(() => {
      onClick((currentValue) => {
        return currentValue + 1;
      });
    }, 3000);

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
