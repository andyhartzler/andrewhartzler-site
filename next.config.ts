import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/project/kc-identities",
        destination: "https://kc-identities.vercel.app",
      },
      {
        source: "/project/kc-identities/:path*",
        destination: "https://kc-identities.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
