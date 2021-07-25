module.exports = {
    env: {
      commonjs: true,
      es6: true,
      node: true,
    },
    extends: [
      'airbnb-base',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
    },
    rules: {
      'import/no-unresolved': 'off',
      'global-require': 'off',
      'no-param-reassign': 'off',
      'class-methods-use-this': 'off',
      'no-underscore-dangle': 'off',
      'no-restricted-syntax': 'off',
      'no-await-in-loop': 'off',
    },
  };
  