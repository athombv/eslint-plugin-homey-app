'use strict';

const { version } = require('./package.json');
const globalTimersRule = require('./rules/global-timers');

const plugin = {
  meta: {
    name: 'eslint-plugin-homey-app',
    version,
  },
  configs: {},
  rules: {
    'global-timers': globalTimersRule,
  },
};

Object.assign(plugin.configs, {
  recommended: {
    plugins: {
      'homey-app': plugin,
    },
    rules: {
      'homey-app/global-timers': 'warn',
    },
  },
});

module.exports = plugin;
