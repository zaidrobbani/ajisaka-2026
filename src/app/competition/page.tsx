import React from "react";
import type { Metadata } from "next";
import Competition from "@/feature/competition/container/Competition";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Competition",
  description:
    "Informasi lengkap kompetisi Festival Ajisaka 2026: kategori lomba, detail pelaksanaan, serta alur pendaftaran peserta.",
  path: "/competition",
  keywords: [
    "Lomba Ajisaka",
    "Kompetisi mahasiswa",
    "Pendaftaran lomba Ajisaka",
  ],
});

const page = () => {
  return <Competition />;
};

export default page;
