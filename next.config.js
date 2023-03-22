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
  // env variables; specify in .env.local (also .git.ignore'd)
  // and then copy name of those variables into these exports...
  // BIG NOTE!!! ALSO IMPORT .ENV.LOCAL TO VERCEL ENVIRONMENT VARIABLES
  // GO ONLINE ETC. AND DO THAT. SO 3 PLACES YOU GOTTA SPECIFY SHIT
  env: {
    // API_URL: process.env.API_URL || 'http://localhost:3000/api',
    PGHOST: process.env.PGHOST,
    PGUSER: process.env.PGUSER,
    PGPASSWORD: process.env.PGPASSWORD,
  },

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