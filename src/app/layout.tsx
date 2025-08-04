import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/src/components/Header";
import "./globals.css";
import "./custom.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Media Site",
  description: "Discover new music and artists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
