// Import page components bellow here
// Keep them organized as the routes object
import Dashboard from 'scenes/Dashboard';
import Settings from 'scenes/Settings';
// WARNING!! Don't erase the nextline as it is necessary for hygen to automatically import your components
// Define imports here

import config from 'config';

const { ROLES } = config;

// Define routes here
// WARNING!! Don't erase the nextline as it is necessary for hygen to automatically import your components
const Routes = [
  {
    exact: true,
    key: 'settings',
    name: 'Settings',
    path: '/settings',
    roles: [ROLES.GUEST],
    component: Settings,
  },
  {
    exact: true,
    key: 'dashboard',
    name: 'Dashboard',
    path: '/',
    roles: [ROLES.GUEST],
    component: Dashboard,
  },
];

// Maps don't work on object convert it to an array
export default Routes;
