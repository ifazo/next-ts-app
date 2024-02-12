import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next TS App",
  description: "Created by ifaz",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
