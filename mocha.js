module.exports = {
  extends: ['./base', './base/testing'].map(require.resolve),
  globals: {
    expect: true,
  },
  env: {
    mocha: true,
  }
}
