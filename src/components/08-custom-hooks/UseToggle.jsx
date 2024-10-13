import React from "react";

const UseToggle = (defaultvalue) => {
  const [show, setShow] = useState(defaultvalue);
  const toggle = () => {
    setShow(!show);
  };
  return { show, toggle };
};

export default UseToggle;
