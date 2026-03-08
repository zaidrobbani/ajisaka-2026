import React from "react";
import type { Metadata } from "next";
import FaqContainer from "@/feature/faq/container/FaqContainer";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ",
  description:
    "Temukan jawaban cepat seputar Festival Ajisaka UGM, mulai dari informasi acara, kompetisi, hingga hal teknis pendaftaran.",
  path: "/faq",
  keywords: [
    "FAQ Ajisaka",
    "Pertanyaan Ajisaka UGM",
    "Informasi pendaftaran Ajisaka",
  ],
});

const page = () => {
  return <FaqContainer />;
};

export default page;
