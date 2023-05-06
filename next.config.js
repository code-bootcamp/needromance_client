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
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           // value: "https://need-romance.site",
  //           // value: "https://needromance.online",
  //           value: "*",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  //         },
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET, POST, PATCH, DELETE, OPTIONS",
  //         },
  //       ],
  //     },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "https://needromance.online/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
