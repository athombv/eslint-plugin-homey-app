'use strict';

const js = require('@eslint/js');
const n = require('eslint-plugin-n');
const eslintPlugin = require('eslint-plugin-eslint-plugin');

module.exports = [
  js.configs.recommended,
  n.configs['flat/recommended'],
  eslintPlugin.configs['flat/recommended'],

  {
    languageOptions: {
      parserOptions: {
        sourceType: 'script',
      },
    },
  },

  {
    files: ['eslint.config.js'],
    rules: {
      'n/no-unpublished-require': 'off',
    },
  }
];
