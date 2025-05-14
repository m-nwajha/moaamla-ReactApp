import { Outlet } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import GuestGuard from '../guards/GuestGuard';
import UserGuard from '../guards/UserGuard';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { PATHS } from './paths';
import RegisterLayout from '../layouts/RegisterLayout';
import Typography from '../pages/Typography';

export const routes = role => [
  {
    path: '/',
    element: (
      <HomeLayout>
        <Outlet />
      </HomeLayout>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'test', element: <Typography /> }
    ]
  },
  {
    path: PATHS.REGISTER.PATH,
    element: (
      <GuestGuard role={role}>
        <RegisterLayout>
          <Outlet />
        </RegisterLayout>
      </GuestGuard>
    ),
    children: [
      {
        index: true,
        element: <Register />
      },
      {
        path: PATHS.LOGIN.PATH,
        element: <Login />
      }
    ]
  },
  {
    path: '/dashboard',
    element: (
      <UserGuard role={role}>
        <Dashboard />
      </UserGuard>
    )
  }
];
