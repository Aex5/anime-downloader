/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["kusonime.com"],
  },
};

module.exports = nextConfig;
