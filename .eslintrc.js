module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    'plugin:@coorpacademy/coorpacademy/core',
    'plugin:@coorpacademy/coorpacademy/es20XX',
    'plugin:@coorpacademy/coorpacademy/prettier',
    'plugin:@coorpacademy/coorpacademy/lodash-fp'
  ],
  plugins: ['@coorpacademy/coorpacademy'],
  rules: {
    'fp/no-class': 'off',
    'no-console': 'off',
    'promise/no-native': 'off'
  },
  overrides: [
    {
      files: ['packages/**/.*/**/*.test.js', 'packages/**/*.test.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ]
};
