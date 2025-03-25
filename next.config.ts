import type { NextConfig } from "next";

// const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig: NextConfig = {
  output: "export",
  // ...(isGithubActions && {
  //   output: "export"
  // }),
  // images: {
  //   unoptimized: true
  // }
  /* config options here */
};

export default nextConfig;
