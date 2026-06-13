import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // ← adicionar isso
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;