/**
 * @fileoverview &lt;ing-checkbox&gt; requires an array-like syntax
 * @author open-wc
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/aria-role');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
  },
});
ruleTester.run('aria-role', rule, {
  valid: [
    {
      code: "html`<div role='alert'></div>`;",
    },
    {
      code: "html`<div role='navigation'></div>`;",
    },
    {
      code: "html`<div role='${foo}'></div>`;", // eslint-disable-line
    },
    {
      code: 'html`<div role=${foo}></div>`;', // eslint-disable-line
    },
    {
      code: 'html`<div></div>`;',
    },
  ],

  invalid: [
    {
      code: "html`<div role='foo'>`;",
      errors: [
        {
          message: 'Invalid role',
        },
      ],
    },
  ],
});