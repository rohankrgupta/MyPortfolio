import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head for meta tags
import "./globals.css";
import Favicon from "../../public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohan Gupta",
  description:
    "Rohan Gupta's Portfolio: Machine Learning Engineer from UW Madison, WI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
