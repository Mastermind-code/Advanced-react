import { createContext, useState } from "react";
import Navlink from "./Navlink";

export const NavbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: "john doe" });

  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <Navlink />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
