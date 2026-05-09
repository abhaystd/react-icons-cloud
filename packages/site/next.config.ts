import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/react-icons-cloud" : "",
  transpilePackages: ["@react-icons-cloud/aws", "@react-icons-cloud/core"],
};

export default nextConfig;
