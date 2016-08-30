module.exports = {
  extends: ['./testing'].map(require.resolve),
  globals: {
    expect: true,
  },
  env: {
    mocha: true,
  }
}
