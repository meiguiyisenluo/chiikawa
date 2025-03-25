import type { MetadataRoute } from "next";
import { siteMetadata } from "@/data/siteMetadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetadata.title,
    short_name: siteMetadata.title,
    description: siteMetadata.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon/favicon16x.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },
      {
        src: "/favicon/favicon32x.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "/favicon/favicon48x.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/favicon/favicon64x.ico",
        sizes: "64x64",
        type: "image/x-icon",
      },
      {
        src: "/favicon/favicon128x.ico",
        sizes: "128x128",
        type: "image/x-icon",
      },
      {
        src: "/favicon/favicon256x.ico",
        sizes: "256x256",
        type: "image/x-icon",
      },
      {
        src: "/favicon/favicon512x.ico",
        sizes: "512x512",
        type: "image/x-icon",
      },
    ],
  };
}
