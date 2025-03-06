import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "./globals.css";
import CanvasBackground from "@/components/background";

const lato = Lato({
  weight: '400',
  variable: "--font-lato",
  subsets: ["latin"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Anderson Tseng",
  description: "You have reached the website of Anderson Tseng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${lato.className}`}
      >
        <CanvasBackground/>
        {children}
      </body>
    </html>
  );
}
