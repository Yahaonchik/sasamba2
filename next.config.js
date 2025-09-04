const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  images: {
    // Extend responsive widths to allow larger, crisper renders on big/retina screens
    deviceSizes: [320, 360, 375, 414, 640, 750, 828, 1080, 1200, 1536, 1920, 2048, 2560, 3840],
    imageSizes: [149, 215, 300, 450, 600],
    formats: ['image/webp'],
  },
});
