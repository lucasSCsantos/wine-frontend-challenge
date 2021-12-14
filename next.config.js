const withImages = require('next-images');

module.exports = withImages({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/1',
        permanent: true,
      },
    ]
  },
  esModule: true,
});