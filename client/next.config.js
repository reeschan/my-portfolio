/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  axios: {
    baseURL: process.browser
      ? "http://localhost:8000"
      : "http://localhost:3000",
  },
  proxy: {
    "/api": {
      target: "http://server:8000",
      pathRewrite: {
        "^/api/": "/api/",
      },
    },
  },
};
module.exports = nextConfig;
