import type { NextConfig } from "next";

declare module "react-simple-maps";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
