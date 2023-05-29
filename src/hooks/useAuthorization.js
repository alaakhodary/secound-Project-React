import { useState } from "react";

const useAuthorization = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setisAuthorized] = useState(true);
  const [Errors, setErrors] = useState([]);
  const [token, setToken] = useState("");
  const [username, setusername] = useState("");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setToken("");
    setusername("");
    setisAuthorized(false);
  };

  return {
    isAuthorized,
    setisAuthorized,
    isLoading,
    setIsLoading,
    Errors,
    setErrors,
    token,
    setToken,
    username,
    setusername,
    logout,
  };
};

export default useAuthorization;
