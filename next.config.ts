import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",   // ✅ allow randomuser.me
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ✅ allow unsplash too
      },
    ],
  },
}

export default nextConfig
