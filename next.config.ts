import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280],
    imageSizes: [160, 256, 340, 480],
  },
};

export default nextConfig;
