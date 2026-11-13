import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,

  ...(isGithubPages && {
    basePath: "/portfolio",
  }),

  images: {
    unoptimized: isGithubPages,
    formats: ["image/avif", "image/webp"],
  },

  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
