import { Outlet } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import GuestGuard from '../guards/GuestGuard';
import UserGuard from '../guards/UserGuard';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { PATHS } from './paths';

export const routes = role => [
  {
    path: '/',
    element: (
      <HomeLayout>
        <Outlet />
      </HomeLayout>
    ),
    children: [{ index: true, element: <Home /> }]
  },
  {
    path: PATHS.REGISTER.PATH,
    element: (
      <GuestGuard role={role}>
        <Outlet />
      </GuestGuard>
    ),
    children: [
      {
        index: true,
        element: <h1>signup</h1>
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
