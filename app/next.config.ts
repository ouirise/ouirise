import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages or simple hosting
  // output: 'export',
  // distDir: 'dist',
  
  // Image optimization config (required for static export)
  images: {
    unoptimized: true,
  },
  
  // Strict mode for better development
  reactStrictMode: true,
  
  // Experimental features
  experimental: {
    // Enable if needed
    // typedRoutes: true,
  },
};

export default nextConfig;
