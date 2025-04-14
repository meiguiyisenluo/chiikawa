import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["pub-13e4b8fe6ec74d69b8a5c3a15bb08711.r2.dev"],
  },
};

export default withNextVideo(nextConfig);
