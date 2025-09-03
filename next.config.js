const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        fs: false,
        path: false,
        stream: false,
        zlib: false,
      }
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'gzip-size': 'gzip-size/browser',
      }
    }
    return config
  },
});
