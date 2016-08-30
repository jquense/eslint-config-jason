Promise.resolve(true)

module.exports = {
  extends: ['./base'].map(require.resolve)
}
