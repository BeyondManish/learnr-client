/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', "learnrapp.s3.amazonaws.com"],
  },
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false };

    return config;
  },
};

module.exports = nextConfig;
