import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import Script from "next/script";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

import FramerMotionProgress from "@/components/FramerMotionProgress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import { ThemeProviders } from "./theme-providers";

import { siteMetadata } from "@/data/siteMetadata";

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
    url: siteMetadata.siteUrl,
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

  other: {
    name: siteMetadata.title,
    description: siteMetadata.description,
    image: siteMetadata.socialBanner,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning className="scroll-smooth">
      <GoogleAnalytics gaId="G-62682KVZ4V" />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5148846884555694"
        crossOrigin="anonymous"
      ></script>
      <Script id="jsonld" async type="application/ld+json">
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
      </Script>
      <Head>
        <meta itemProp="name" content={siteMetadata.title} />
        <meta itemProp="image" content={siteMetadata.socialBanner} />
        <meta
          name="description"
          itemProp="description"
          content={siteMetadata.description}
        />
      </Head>

      <body
        className={`font-sans antialiased w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto bg-[#F9F9F9] dark:bg-[#101524] text-[#374151] dark:text-[#f2ddcc]`}
      >
        <ThemeProviders>
          <Header></Header>
          <main className="min-h-[600px]">{children}</main>
          <Footer></Footer>
          <ScrollToTop />
          <FramerMotionProgress></FramerMotionProgress>
        </ThemeProviders>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
