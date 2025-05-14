// Import React Hooks
import { useContext } from 'react';

// Import Role Context
import { RoleContext } from '../context/AuthContext';

export const useContextAuth = () => useContext(RoleContext);
