import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 'https://github.com/PavelCp/next-app'
  output: "standalone",
  basePath: "/next-app",
  reactStrictMode: true,
  images: { path: "/next-app" },
};

export default nextConfig;
