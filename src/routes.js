import React from 'react';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Error404 from './views/Error404';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard Page', component: Dashboard },
  { path: '/profile', exact: true, name: 'Profile Page', component: Profile },
  { path: '*', exact: true, name: 'Error Page', component: Error404 },
];

export default routes;
