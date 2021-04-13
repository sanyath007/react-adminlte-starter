import React from 'react';
import Profile from './views/Profile';
import Dashboard from './views/Dashboard';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard Page', component: Dashboard },
  { path: '/profile', exact: true, name: 'Profile Page', component: Profile },
];

export default routes;
