import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState({});

  const signOut = () => {
    Cookies.remove("user");
    setCurrentUser(null);
  };

  const login = async (email, password) => {
    const response = await fetch(
      "https://imbue-backend.herokuapp.com/users/login",
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const user = data["currUser"]
    if (response.status === 201) {
      setCurrentUser(user);
      Cookies.set("user", user);
    } else {
      setCurrentUser(null);
    }
    return user;
  };

  const signUp = async (name, password, email) => {
    const response = await fetch("https://imbue-backend.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        password,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user = await response.json();

    if (response.status === 201) {
        console.log("User is:", user);
      setCurrentUser(user);
      Cookies.set("user", user);
    } else {
      setCurrentUser(null);
    }
    return user;
  };

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const value = {
    currentUser,
    login,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
