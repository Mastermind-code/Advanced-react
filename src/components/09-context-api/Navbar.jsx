import React, { useState } from "react";
import Navlink from "./Navlink";

const Navbar = () => {
    const [user, setUser] = useState(name: 'john doe');

    const logout = () => {
        setUser(null);
    }
  return (
    <div>
        <h5>Context API</h5>
        <Navlink user={user} logout={logout}/>
    </div>
  )

export default Navbar;
