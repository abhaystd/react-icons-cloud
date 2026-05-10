import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://abhaystd.github.io/react-icons-cloud";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "React Icons Cloud – 500+ AWS Cloud Icons for React",
    template: "%s | React Icons Cloud",
  },
  description:
    "The most comprehensive open-source library of high-quality AWS cloud architecture and resource icons as React components. Tree-shakeable, fully typed, and easy to use. Search, preview, and copy icons instantly.",
  keywords: [
    "react icons",
    "cloud icons",
    "aws icons",
    "aws architecture icons",
    "aws resource icons",
    "react components",
    "cloud infrastructure icons",
    "icon library",
    "react svg icons",
    "amazon web services icons",
    "aws s3 icon",
    "aws lambda icon",
    "react-icons-cloud",
    "open source icons",
    "tree shakeable icons",
    "typescript react icons",
  ],
  authors: [{ name: "React Icons Cloud Team" }],
  creator: "abhaystd",
  publisher: "React Icons Cloud",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "React Icons Cloud – 500+ AWS Cloud Icons for React",
    description:
      "The most comprehensive open-source library of high-quality AWS cloud architecture icons as React components. Search, preview, and copy icons instantly.",
    url: SITE_URL,
    siteName: "React Icons Cloud",
    images: [
      {
        url: "/favicon.png",
        width: 1024,
        height: 1024,
        alt: "React Icons Cloud Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "React Icons Cloud – 500+ AWS Cloud Icons for React",
    description:
      "Search and use 500+ high-quality AWS architecture icons as React components. Tree-shakeable, typed, and open source.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "React Icons Cloud",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              description:
                "The most comprehensive open-source library of high-quality AWS cloud architecture and resource icons as React components.",
              url: SITE_URL,
              author: {
                "@type": "Person",
                name: "abhaystd",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex bg-white dark:bg-black text-black dark:text-white`}
      >
        <Sidebar />
        <main className="flex-1 ml-64 min-h-screen relative">{children}</main>
      </body>
    </html>
  );
}
