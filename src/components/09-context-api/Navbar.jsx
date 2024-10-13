import React, { useState } from "react";
import Navlink from "./Navlink";

const Navbar = () => {
  const [user, setUser] = useState({ name: "john doe" });

  const logout = () => {
    setUser(null);
  };
  return (
    <nav className="navbar">
      <h5>Context API</h5>
      <Navlink user={user} logout={logout} />
    </nav>
  );
};

export default Navbar;
