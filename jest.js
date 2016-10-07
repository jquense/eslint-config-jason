module.exports = {
  extends: ['./base', './base/testing'].map(require.resolve),
  env: {
    jest: true,
  },
  globals: {
    afterAll: false,
		beforeAll: false,
  },
}
