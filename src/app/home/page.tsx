import type { Metadata } from "next";
import HomeContainer from "@/feature/home/container/HomeContainer";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Home",
  description:
    "Beranda Festival Ajisaka 2026 yang menampilkan informasi utama, timeline, sponsor, dan sorotan kegiatan terbaru.",
  path: "/home",
  keywords: ["Home Ajisaka", "Timeline Ajisaka 2026", "Sponsor Ajisaka"],
});

const page = () => {
  return <HomeContainer />;
};

export default page;
