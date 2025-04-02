import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

const Router = () => {
  const [role] = useState('guest');
  const useRoute = useRoutes(routes(role));
  return useRoute;
};

export default Router;
