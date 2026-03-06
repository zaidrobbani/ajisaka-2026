import React from "react";
import type { Metadata } from "next";
import LensaAjisaka from "@/feature/lensaAjisaka/container/LensaAjisaka";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Lensa Ajisaka",
  description:
    "Lihat dokumentasi dan sorotan momen Festival Ajisaka melalui Lensa Ajisaka dari berbagai rangkaian kegiatan.",
  path: "/lensa-ajisaka",
  keywords: ["Galeri Ajisaka", "Dokumentasi Ajisaka", "Lensa Ajisaka 2026"],
});

const page = () => {
  return <LensaAjisaka />;
};

export default page;
