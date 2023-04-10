import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import React, { useEffect, useState } from "react";
import Login from "../MainComponents/Login/Login";
import AppBody from "../MainComponents/AppBody/AppBody";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  // console.log('authUser', authUser.email)
  // authUser.email === 'kabir@lenddirect.io'? console.log('yes'): console.log('no')

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  console.log(authUser)


  return (
    <div>
      {authUser ? (
        <AppBody authUser={authUser}/>
      ) : (
        <Login/>
      )}
    </div>
  );
};

export default AuthDetails;