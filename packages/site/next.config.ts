import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  transpilePackages: ["@react-icons-cloud/aws", "@react-icons-cloud/core"],
};

export default nextConfig;
