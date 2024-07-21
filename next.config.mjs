/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  typescript: {
    ignoreBuildErrors:
      process.env.NEXT_PUBLIC_TS_IGNORE_BUILD_ERRORS === "true",
  },
  eslint: {
    ignoreDuringBuilds:
      process.env.NEXT_PUBLIC_ESLINT_IGNORE_DURING_BUILDS === "true",
  },
  output: process.env.NEXT_PUBLIC_OUTPUT || "standalone",
  distDir: "dist",
  images: {
    unoptimized: true,
    domains: ["pnguyen215.github.io"],
  },
  reactStrictMode: true,
};

export default nextConfig;
