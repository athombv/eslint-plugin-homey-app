# ESLint Plugin for Homey Apps

This module adds ESLint rules that enforce best practices for Homey Apps.

## Installation

To use this module you also need to install ESLint:

```bash
$ npm install --save-dev eslint eslint-plugin-homey-app
```

### Legacy Config Support

Starting from v2.0.0 this plugin only supports the flat config.
If you wish to use the legacy config, please install version 1.

```bash
$ npm install --save-dev eslint-plugin-homey-app@1
```

## Usage

After installation can extend the recommended rules from your ESLint configuration file:

```json
{
  "extends": ["plugin:homey-app/recommended"]
}
```
