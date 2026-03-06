import React from "react";
import type { Metadata } from "next";
import AboutUsContainer from "@/feature/about/container/AboutUsContainer";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Kenali Festival Ajisaka 2026 lebih dekat: perjalanan, nilai, pembina, dan susunan panitia di balik rangkaian acara.",
  path: "/about-us",
  keywords: ["Tentang Ajisaka", "Panitia Ajisaka", "Perjalanan Ajisaka"],
});

const page = () => {
  return <AboutUsContainer />;
};

export default page;
