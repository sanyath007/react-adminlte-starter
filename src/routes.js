import React from 'react';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Error404 from './views/Error404';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  { path: '*', exact: true, name: 'Error404', component: Error404 },
];

export default routes;
