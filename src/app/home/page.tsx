import type { Metadata } from "next";
import HomeContainer from "@/feature/home/container/HomeContainer";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Home",
  description:
    "Beranda Festival Ajisaka UGM yang menampilkan informasi utama, timeline, sponsor, dan sorotan kegiatan terbaru.",
  path: "/home",
  keywords: ["Home Ajisaka", "Timeline Ajisaka UGM", "Sponsor Ajisaka"],
});

const page = () => {
  return <HomeContainer />;
};

export default page;
