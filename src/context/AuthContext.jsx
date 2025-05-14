import { createContext, useContext, useState } from 'react';
import { ROLES } from '../constants/ROLES';
const myToken = () => localStorage.getItem('token');
const myRole = () => localStorage.getItem('role', ROLES.user); 

export const RoleContext = createContext(null);

const AuthContext = ({ children }) => {
  const [role, setRole] = useState(()=> myRole () || ROLES.guest);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(()=> myToken() || '');
  return (
    <RoleContext.Provider
      value={{ role, setRole, user, setUser, token, setToken }}>
      {children}
    </RoleContext.Provider>
  );
};

export default AuthContext;
