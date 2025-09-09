import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
          // For custom domain deployment
          basePath: '',
          assetPrefix: '',
};

export default nextConfig;
