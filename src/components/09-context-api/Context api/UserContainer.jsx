import React, { useContext, useState } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext);
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {(user, name.toUpperCase())}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};

export default UserContainer;