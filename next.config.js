const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/1',
        permanent: true,
      },
    ]
  }
});