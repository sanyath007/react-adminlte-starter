import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import ChartJS from './views/Charts/ChartJS';
import Flot from './views/Charts/Flot';
import Inline from './views/Charts/Inline';
import Error404 from './views/Error404';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  { path: '/chartjs', exact: true, name: 'ChartJS', component: ChartJS },
  { path: '/flot', exact: true, name: 'Flot', component: Flot },
  { path: '/inline', exact: true, name: 'Inline', component: Inline },
  { path: '*', exact: true, name: 'Error404', component: Error404 },
];

export default routes;
