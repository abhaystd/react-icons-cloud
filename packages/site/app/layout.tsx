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

export const metadata: Metadata = {
  title: "React Icons Cloud - Professional Cloud Provider Icons for React",
  description: "The most comprehensive library of high-quality cloud provider icons for React applications. Search and use icons for AWS and more with ease.",
  keywords: ["react icons", "cloud icons", "aws icons", "react components", "cloud infrastructure icons", "icon library"],
  authors: [{ name: "React Icons Cloud Team" }],
  openGraph: {
    title: "React Icons Cloud",
    description: "Professional Cloud Provider Icons for React",
    url: "https://react-icons-cloud.vercel.app", // Placeholder or actual URL if known
    siteName: "React Icons Cloud",
    images: [
      {
        url: "/favicon.png", // Or a dedicated OG image
        width: 1024,
        height: 1024,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "React Icons Cloud",
    description: "Professional Cloud Provider Icons for React",
    images: ["/favicon.png"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex bg-white dark:bg-black text-black dark:text-white`}
      >
        <Sidebar />
        <main className="flex-1 ml-64 min-h-screen relative">{children}</main>
      </body>
    </html>
  );
}
