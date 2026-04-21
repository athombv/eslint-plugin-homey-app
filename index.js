'use strict';

const globalTimersRule = require('./rules/global-timers');

const plugin = {
  meta: {
    name: 'eslint-plugin-homey-app',
    version: '1.1.0',
  },
  configs: {},
  rules: {
    'global-timers': globalTimersRule,
  },
};

Object.assign(plugin.configs, {
  'flat/recommended': {
    plugins: {
      'homey-app': plugin,
    },
    rules: {
      'homey-app/global-timers': 'warn',
    },
  },

  recommended: {
    plugins: ['homey-app'],
    rules: {
      'homey-app/global-timers': 'warn',
    },
  },
});

module.exports = plugin;
