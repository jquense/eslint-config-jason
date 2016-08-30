module.exports = {
  extends: ['./base'].map(require.resolve),
  globals: {
    sinon: true,
  },
  rules: {
    'no-console': 0,
    'global-require': 0,
  }
}
