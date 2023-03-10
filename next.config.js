module.exports = {
    images: {
      domains: ['img.youtube.com'],
    },
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: 'http://localhost:5010/:path*',
        },
      ]
    },
  }
  