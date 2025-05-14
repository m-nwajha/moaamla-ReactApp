import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { useContextAuth } from '../hooks/useContext';

const Router = () => {
  const { role } = useContextAuth();
  const useRoute = useRoutes(routes(role));
  return useRoute;
};

export default Router;
