import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "fintech/app/(shared)/components/Header";
import Layout from "fintech/app/(shared)/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "T-Media x Fintech Market",
  description: "This is demo application integrating with Fintech Market API",
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
