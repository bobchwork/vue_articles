module.exports = {
  env: {
    jest: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': ['error', 'never', { vue: 'never', js: 'never' }],
  },
};
