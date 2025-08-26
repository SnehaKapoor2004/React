import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      {user ? <p>Welcome, {user.username}!</p> : <p>No user logged in.</p>}
    </div>
  );
}

export default Profile;
