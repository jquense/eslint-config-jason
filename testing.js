module.exports = {
  extends: ['./base'].map(require.resolve),
  env: {
    mocha: true,
  },
  rules: {
    'no-console': 0,
    'global-require': 0,
  }
}
