import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // disabled because:
  // a) i dislike the optimized links that next.js generates
  // b) it doesn't work with github pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
