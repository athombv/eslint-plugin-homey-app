# ESLint Plugin for Homey Apps

ESLint rules that enforce best practices for Homey Apps.

## Installation

```bash
npm install --save-dev eslint-plugin-homey-app
```

## Usage

```js
// eslint.config.js
const homeyApp = require('eslint-plugin-homey-app');

module.exports = [
  homeyApp.configs.recommended,
];
```

## Rules

### `homey-app/global-timers`

Warns when using global `setTimeout` or `setInterval` instead of `this.homey.setTimeout` / `this.homey.setInterval`. Global timers are not automatically cleared when the app is destroyed.

### `homey-app/homey-log`

Warns when using `console.log` or `console.error` instead of `this.log` / `this.error`.

## Legacy Config

This plugin requires ESLint v10 and flat config. For legacy config support, install v1:

```bash
npm install --save-dev eslint-plugin-homey-app@1
```
