import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
images: {
    domains: [
      "images.unsplash.com",
      "api.escuelajs.co",
      "placehold.co",
      "i.imgur.com",
      // Don't allow Shutterstock in production
      // "www.shutterstock.com",
    ],
  },
};

export default nextConfig;
