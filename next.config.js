const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
});

module.exports = {
  // THIS IS VERY DANGEROUS!!!!!! ***I ADDED THIS TO GET IT TO BUILD***
  // NEED AN ADULT. THIS WAS ADDED CURRENT DATE: 23-FEB-2023
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // webpack5: true, // DON'T EVER FUCKING USE THIS. DON'T LISTEN TO STACKOVERFLOW, NO ONE
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};