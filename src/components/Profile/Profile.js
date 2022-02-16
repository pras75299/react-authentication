import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <p>Mail id- {user.email}</p>
        {/* <div>{JSON.stringify(user, null, 2)}</div> */}
      </div>
    )
  );
}

export default Profile;
