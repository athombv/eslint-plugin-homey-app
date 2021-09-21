'use strict';

const rule = require('../rules/global-timers');
const RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester();

ruleTester.run('global-timers', rule, {
  valid: [
    `this.homey.setTimeout(function () { console.log(42) }, 100)`,
    `this.homey.setInterval(function () { console.log(42) }, 100)`,
  ],

  invalid: [
    {
      code: `setTimeout(function () { console.log(42) }, 100)`,
      errors: [
        {
          messageId: 'globalTimer',
          suggestions: [
            {
              messageId: 'globalTimerFix',
              output: `this.homey.setTimeout(function () { console.log(42) }, 100)`,
            },
          ],
        },
      ],
    },

    {
      code: `setInterval(function () { console.log(42) }, 100)`,
      errors: [
        {
          messageId: 'globalTimer',
          suggestions: [
            {
              messageId: 'globalTimerFix',
              output: `this.homey.setInterval(function () { console.log(42) }, 100)`,
            },
          ],
        },
      ],
    },
  ],
});
