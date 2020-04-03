import production from './production'
import development from './development'

const config = process.env.REACT_APP_STAGE === 'production'
  ? production
  : development;

export default {
  // Add common config values here
  COMMON_CONFIG: 'DEFAULT_COMMON_CONFIG',
  ROLES: {
    GUEST: 'guest'
  },
  ...process.env,
  ...config
};