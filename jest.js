module.exports = {
  extends: ['./testing'].map(require.resolve),
  env: {
    jest: true,
  },
  globals: {
    afterAll: false,
		beforeAll: false,
  },
}
