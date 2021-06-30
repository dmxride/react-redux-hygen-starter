/**
 * -----------------------------------------------------------------------------
 * Copyright (C) Ubiwhere, LDA
 * 2012-2018
 *
 *
 * The reproduction, transmission or use of this document or its contents is not
 * permitted without express written authorization. All rights, including rights
 * created by patent grant or registration of a utility model or design, are
 * reserved. Modifications made to this document are restricted to authorized
 * personnel only. Technical specifications and features are binding only when
 * specifically and expressly agreed upon in a written contract.
 * -----------------------------------------------------------------------------
 *
 * Router
 * Add new routes here
 */
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
