import useAuthorization from "../hooks/useAuthorization";

const { createContext, useContext } = require("react");

export const AuthorizationContext = createContext(null);

const AuthProvider = ({ children }) => {
  const General = useAuthorization();
  return (
    <AuthorizationContext.Provider value={General}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => {
  return useContext(AuthorizationContext);
};
