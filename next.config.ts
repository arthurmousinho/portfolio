import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'github.com' },
      { hostname: '**.graphassets.com' },
      { hostname: 'media.licdn.com' },
    ]
  }
};

export default nextConfig;