const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  images: {
    deviceSizes: [320, 360, 375, 414, 640, 750, 828, 1080, 1200],
    imageSizes: [149, 215, 300],
    formats: ['image/webp'],
  },
});
