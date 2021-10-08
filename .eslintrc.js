module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jester:": true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "consistent-return": "off",
    "no-debugger": "off",
  },
};
