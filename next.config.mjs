/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  typescript: {
    ignoreBuildErrors:
      process.env.NEXT_PUBLIC_TS_IGNORE_BUILD_ERRORS === "true",
  },
  eslint: {
    ignoreDuringBuilds:
      process.env.NEXT_PUBLIC_ESLINT_IGNORE_DURING_BUILDS === "true",
  },
  output: "export",
  // output: process.env.NEXT_PUBLIC_OUTPUT || "standalone",
  reactStrictMode: true,
  // images: {
  //   disableStaticImages: true,
  // },
};

export default nextConfig;
