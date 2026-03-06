import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Montserrat,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import "./globals.css";
import MainLayout from "@/layout/MainLayout";
import { defaultMetadata } from "./seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter-google",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat-google",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins-google",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-google",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${montserrat.variable} ${poppins.variable} ${playfairDisplay.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
