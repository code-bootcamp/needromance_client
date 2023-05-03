/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  compiler: { emotion: true },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "https://need-romance.site/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
