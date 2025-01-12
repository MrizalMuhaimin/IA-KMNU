import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  {
    rules: {
      'indent': [
        'error',
        2
      ],
      'quotes': [
        'error',
        'single'
      ],
      'no-underscore-dangle': 'off',
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];