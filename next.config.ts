/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "", // Empty for username.github.io repos
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
