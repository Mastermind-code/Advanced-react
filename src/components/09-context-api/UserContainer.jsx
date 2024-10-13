import React from "react";

const UserContainer = ({ user, logout }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()} </p>
          <button type="button" className="btn" onClick={logout}></button>
        </>
      ) : (
        <p>You are not logged in!</p>
      )}
    </div>
  );
};

export default UserContainer;
