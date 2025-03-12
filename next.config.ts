import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'github.com' },
      { hostname: '**.graphassets.com' }
    ]
  }
};

export default nextConfig;