
import globals from 'globals'

import js from "@eslint/js";


export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    rules: {
      "semi": [
        "warn",
        "never",
        {
          "beforeStatementContinuationChars": "always"
        }
      ],
      "no-tabs": "error",
      "indent": [
        "error",
        2
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "max-statements-per-line": [
        "error",
        {
          "max": 1
        }
      ],
      "space-before-function-paren": [
        "error",
        {
          "anonymous": "always",
          "named": "never",
          "asyncArrow": "always"
        }
      ],
      "comma-dangle": "off",
      "no-multiple-empty-lines": [
        "warn",
        {
          "max": 3,
          "maxBOF": 1,
          "maxEOF": 1
        }
      ],
      "import/no-named-as-default-member": "off"
    }
  }
];
