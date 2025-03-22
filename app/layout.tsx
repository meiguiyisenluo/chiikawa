import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import RouterControlsPanel from "@/components/RouterControlsPanel";
import Loading from "@/components/Loading";

import { ThemeProviders } from "./theme-providers";

import { siteMetadata } from "@/data/siteMetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: "%s | " + siteMetadata.title,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,

  generator: "Next.js",
  applicationName: "Chiikawa 表情包",
  authors: [{ name: "Yisen L", url: "https://luoyisen.com" }],
  creator: "Yisen L",
  publisher: "Yisen L",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "zh_CN",
    type: "website",
  },

  alternates: {
    canonical: siteMetadata.siteUrl,
    types: {
      "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
    },
    languages: {
      en: siteMetadata.siteUrl, // 英文版本
      zh: siteMetadata.siteUrl, // 中文版本
    },
    media: {
      "only screen and (max-width: 768px)": siteMetadata.siteUrl, // 移动版本链接
    },
  },

  robots: {
    index: true,
    follow: true,
    noarchive: false,
    noimageindex: false,
    nosnippet: false,
    nocache: false,
    "max-video-preview": 10,
    "max-image-preview": "large",
    "max-snippet": 150,
    googleBot: {
      index: true,
      follow: true,
      noarchive: false,
      noimageindex: false,
      nosnippet: false,
      nocache: false,
      "max-video-preview": 10,
      "max-image-preview": "large",
      "max-snippet": 150,
    },
  },

  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Chiikawa 表情包合集",
          description: siteMetadata.description,
          creator: {
            "@type": "Person",
            name: "Yisen L",
          },
          url: siteMetadata.siteUrl,
          thumbnailUrl: siteMetadata.socialBanner,
          image: [siteMetadata.socialBanner],
          datePublished: "2025-03-22",
          keywords: siteMetadata.keywords.join(", "),
        })}
      </script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} select-none antialiased w-[100vw] h-[100vh] bg-[#F9F9F9] dark:bg-black text-[#374151] dark:text-white`}
      >
        <ThemeProviders>
          <Loading />
          <RouterControlsPanel>
            <h1>/Chiikawa</h1>
          </RouterControlsPanel>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
