import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
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
    const user = data["currUser"];
    if (response.status === 201) {
      setCurrentUser(user);
      Cookies.set("user", user, { expires: 7 });
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
      setCurrentUser(user);
      Cookies.set("user", user, { expires: 7 });
    } else {
      setCurrentUser(null);
    }
    return user;
  };

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      setCurrentUser(user);
      setLoading(false);
    } else {
      setCurrentUser(null);
      setLoading(false);
    }
  }, []);

  const value = {
    currentUser,
    login,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
