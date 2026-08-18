'use strict';

const { version } = require('./package.json');
const globalTimersRule = require('./rules/global-timers');
const homeyLogRule = require('./rules/homey-log');

const plugin = {
  meta: {
    name: 'eslint-plugin-homey-app',
    version,
  },
  configs: {},
  rules: {
    'global-timers': globalTimersRule,
    'homey-log': homeyLogRule,
  },
};

Object.assign(plugin.configs, {
  // flat config
  recommended: {
    plugins: {
      'homey-app': plugin,
    },
    rules: {
      'homey-app/global-timers': 'warn',
    },
  },
  // legacy eslintrc config
  'legacy-recommended': {
    plugins: ['homey-app'],
    rules: {
      'homey-app/global-timers': 'warn',
    },
  },
});

module.exports = plugin;
