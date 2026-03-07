"use client";
import React, { useState } from "react";
import Navbar from "@/shared/navbar/Navbar";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useGsapScrollReveal } from "@/lib/useGsapScrollReveal";

interface DataCompetition {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  LinkPendaftaran: string;
  LinkGuidebook: string;
}

const Landing = () => {
  const [activeTab, setActiveTab] = useState("Arjuna");
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to render description with bold quoted text
  const renderDescription = (text: string) => {
    const formatted = text.replace(
      /(“.*?”)/,
      "<span class='font-semibold'>$1</span>",
    );

    return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
  };

  const dataCompetition: DataCompetition[] = [
    {
      id: 1,
      category: "Arjuna",
      title: "Arjuna - Fotografi Esai",
      description:
        "Ajang Citra Sejuta Warna (Arjuna) merupakan mata lomba Festival Ajisaka UGM 2026 yang berfokus pada bidang fotografi dalam bentuk fotografi esai dengan mengangkat subtema “Laki-laki Tidak Bercerita”. Melalui mata lomba ini, Insan Kreatif ditantang untuk menyajikan ide kreatif serta keterampilan m ereka dalam membuat potret bercerita terkait luapan emosi laki-laki dalam konstruksi sosial yang dipaksakan kepada mereka oleh masyarakat, utamanya di Indonesia.",
      image: "/arjuna.png",
      LinkPendaftaran: "https://bit.ly/PendaftaranArjuna2026",
      LinkGuidebook: "https://bit.ly/PanduanSeleksiArjuna2026",
    },
    {
      id: 2,
      category: "Nakula",
      title: "Nakula - Riset Populer",
      description:
        "Penelitian Kawula Muda (Nakula) merupakan mata lomba Festival Ajisaka UGM 2026 berfokus pada bidang penelitian dengan artikel riset populer dan infografik sebagai luarannya. Tahun ini, Nakula mengangkat subtema “Strategi Gen Z dalam Membangun Kesadaran Diri di Era Digital”. Melalui mata lomba ini, Insan Kreatif diharapkan dapat mengeksplorasi peran ilmu komunikasi dalam menyajikan, menghadapi, serta memberikan solusi terhadap isu kesehatan mental yang kerap dialami oleh Gen Z di era digital.",
      image: "/nakula.png",
      LinkPendaftaran: "https://bit.ly/PendaftaranNakula2026",
      LinkGuidebook: "https://bit.ly/PanduanSeleksiNakula2026",
    },
    {
      id: 3,
      category: "Prahasta",
      title: "Prahaasta - PR Campaign",
      description:
        "Pertarungan Humas Nusantara (Prahasta) merupakan mata lomba Festival Ajisaka UGM 2026 yang berfokus pada bidang kehumasan. Prahasta mengangkat subtema “Bekerja Tanpa Takut, Bersuara Tanpa Ragu” yang membahas tentang isu kesehatan mental yang dialami Gen Z sebagai fresh graduate atau pekerja muda di lingkup dunia kerja. Insan Kreatif akan ditantang untuk mengeluarkan gagasan-gagasan kreatif dalam menentukan strategi dan media komunikasi yang tepat dan efektif terkait permasalahan yang diangkat dalam bentuk proposal kampanye.",
      image: "/prahasta.webp",
      LinkPendaftaran: "https://bit.ly/PendaftaranPrahasta2026",
      LinkGuidebook: "https://bit.ly/PanduanSeleksiPrahasta2026",
    },
    {
      id: 4,
      category: "Sadewa",
      title: "Sadewa - Skippable Ads",
      description:
        "Sayembara Dewa Pariwara (Sadewa) merupakan mata lomba Festival Ajisaka UGM 2026 yang berfokus pada bidang periklanan dengan skippable ads berdurasi 15-30 detik sebagai luaran. Sadewa mengangkat subtema “Peduli Jiwa, Wujudkan Aksi Nyata” yang berkaitan dengan pentingnya kesadaran atas kesehatan mental yang perlu diimbangi dengan pemahaman kritis dan penerapan yang tepat dalam kehidupan sehari-hari. Melalui mata lomba Sadewa, Insan Kreatif ditantang untuk menarik perhatian audiens dalam 10 detik pertama dan diharapkan mampu untuk menyampaikan inti pesan yang diangkat meskipun audiens memilih untuk melewati iklan.",
      image: "/Sadeewa.webp",
      LinkPendaftaran: "https://bit.ly/PendaftaranSadewa2026",
      LinkGuidebook: "https://bit.ly/PanduanSeleksiSadewa2026",
    },
  ];

  const activeData =
    dataCompetition.find((data) => data.category === activeTab) ||
    dataCompetition[0];

  const sectionRef = React.useRef<HTMLElement | null>(null);
  const contentRef = React.useRef<HTMLElement | null>(null);

  useGsapScrollReveal({
    sectionRef,
    contentRef,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-auto flex flex-col self-stretch items-start justify-start relative gap-5"
    >
      <Navbar />
      <Image
        src={"/image-44.webp"}
        alt="Ombak ungu pojok kanan atas"
        width={500}
        height={500}
        className="w-80.5 sm:w-62.5 md:w-100 lg:w-200 absolute object-cover top-0 right-0 z-10 animate-[rootWave_9s_ease-in-out_infinite]"
      />
      <div className="w-full px-4 md:px-10 h-auto flex flex-col items-start justify-center py-4 gap-4 md:gap-6 relative z-10 mt-6 md:mt-0">
        <div className="w-[80%] sm:w-[60%] md:w-auto mt-6 md:mt-10 flex items-center justify-center rounded-full py-2 px-6 bg-gradient-200 shadow-md backdrop-blur-sm">
          <h1 className="text-white font-playfair text-sm sm:text-lg md:text-xl leading-4 xs:leading-normal font-semibold text-center">
            WIRASA: Wira Swarakan Rasa
          </h1>
        </div>
        <Image
          src={"/image-41.webp"}
          alt="Logo Ajisaka"
          width={500}
          height={500}
          className="w-full sm:w-[80%] md:w-[50%] lg:w-[40%] object-cover mt-2 md:mt-0"
        />
      </div>
      {/* Selected Category */}
      <div className="w-full flex items-center justify-center md:justify-start relative z-10 px-6 md:px-12 mt-6 md:mt-0">
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-between md:justify-start relative z-10 rounded-[40px] p-2 bg-white/10 backdrop-blur-md gap-0 md:gap-4 md:px-4">
          {/* Desktop Only Categories */}
          <div className="hidden md:flex flex-row items-center justify-start gap-4">
            {dataCompetition.map((data) => (
              <button
                key={data.id}
                onClick={() => setActiveTab(data.category)}
                className={`flex-none w-37.5 py-2 items-center justify-center rounded-[30px] font-montserrat  text-md cursor-pointer ${
                  activeTab === data.category
                    ? "bg-[linear-gradient(90deg,#FBD596_0%,#FBC364_100%)] text-[#0E1527] shadow-[0_4px_4px_rgba(0,0,0,0.15)] font-bold"
                    : "bg-[rgba(255_255_255_0.10)] bacdrop-blur-md text-white font-medium "
                }`}
              >
                {data.category}
              </button>
            ))}
          </div>

          {/* Mobile View Active Category + Dropdown Arrow */}
          <div className="md:hidden w-full flex items-center justify-between">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex-1 py-3 flex items-center justify-center bg-[linear-gradient(90deg,#FBD596_0%,#FBC364_100%)] rounded-[30px] font-montserrat font-medium text-lg text-[#0E1527] shadow-[0_4px_4px_rgba(0,0,0,0.15)]"
            >
              {activeTab}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex-none w-12 h-12 ml-2 flex items-center justify-center bg-white/10 text-white backdrop-blur-lg rounded-full shrink-0"
            >
              <ChevronDown
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>
          </div>

          {/* Mobile Dropdown List */}
          {isOpen && (
            <div className="md:hidden w-full flex flex-col items-center justify-start gap-2 mt-2">
              {dataCompetition.map(
                (data) =>
                  activeData.category !== data.category && (
                    <button
                      key={data.id}
                      onClick={() => {
                        setActiveTab(data.category);
                        setIsOpen(false);
                      }}
                      className={`w-full py-3 flex items-center justify-center rounded-[30px] font-montserrat font-medium text-lg transition-colors ${
                        activeTab === data.category
                          ? "bg-[linear-gradient(90deg,#FBD596_0%,#FBC364_100%)] text-[#0E1527] shadow-[0_4px_4px_rgba(0,0,0,0.15)]"
                          : "bg-[#D9D9D9] text-[#0E1527] hover:bg-[#B3B3B3]"
                      }`}
                    >
                      {data.category}
                    </button>
                  ),
              )}
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex items-center justify-center relative z-10 px-4 md:px-12 h-auto gap-0 mt-6 md:mt-0">
        {dataCompetition.map((data) => (
          <Image
            key={data.id}
            onClick={() => setActiveTab(data.category)}
            src={data.image}
            alt={data.title}
            width={500}
            height={500}
            className={`object-cover transition-all duration-500 ease-in-out cursor-pointer ${
              activeData.id === data.id
                ? "block w-[80%] sm:w-[60%] md:w-[35%] lg:w-[35%] drop-shadow-2xl z-20 scale-100"
                : "hidden md:block md:w-[15%] lg:w-[15%] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:scale-105 z-10"
            }`}
          />
        ))}
      </div>
      <div className="w-full flex items-center justify-center relative h-auto z-20 px-4 md:px-12 pb-12 overflow-visible">
        <div
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className="mx-auto w-full md:max-w-6xl rounded-3xl sm:rounded-4xl md:rounded-[40px] lg:rounded-[48px] border-b-2 border-r border-l border-white bg-white/10 backdrop-blur-md box-border shadow-[0_4px_4px_rgba(0,0,0,0.25)] px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12 flex items-start justify-center flex-col gap-4 md:gap-6 transition-all duration-500 ease-in-out relative z-30"
        >
          <h1 className="text-left font-playfair font-semibold bg-clip-text text-transparent bg-[linear-gradient(102deg,#FBD596_0.77%,#FBC364_22.3%,#FBD596_41.41%,#FBC364_65.41%,#FBD596_87.21%,rgba(251,195,100,0.75)_107.16%)] text-2xl md:text-3xl lg:text-4xl ">
            {activeData.title}
          </h1>
          <p className="text-justify font-montserrat text-sm md:text-base lg:text-lg font-normal leading-normal tracking-[-0.3px] text-white">
            {renderDescription(activeData.description)}
          </p>
          <div className="w-full flex flex-col md:flex-row-reverse items-center justify-center md:justify-start gap-4 px-0 md:px-5 mt-4 relative z-40">
            {dataCompetition.map(
              (dataCompetition, index) =>
                activeData.id === dataCompetition.id && (
                  <React.Fragment key={index}>
                    <Link
                      className="w-full md:w-auto rounded-full flex items-center justify-center px-8 py-3 bg-[linear-gradient(90deg,#47427C_-10.14%,#9A4183_53.2%,#E18BA6_116.55%)] text-white text-center font-montserrat text-sm md:text-base font-semibold whitespace-nowrap shadow-md cursor-pointer transition-all duration-300 ease-in-out relative z-50 overflow-hidden group hover:scale-110 hover:shadow-[0_0_30px_rgba(154,65,131,0.8)] hover:font-extrabold"
                      href={dataCompetition.LinkPendaftaran}
                    >
                      <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                      <span className="relative z-10">SUBMITION</span>
                    </Link>
                    <Link
                      className="w-full md:w-auto relative px-8 py-3 rounded-full text-white font-bold tracking-widest text-xs md:text-sm bg-transparent text-center group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(154,65,131,0.6)]"
                      style={{
                        border: "2px solid transparent",
                        backgroundClip: "padding-box",
                      }}
                      href={dataCompetition.LinkGuidebook}
                    >
                      <span
                        className="absolute inset-0 rounded-full pointer-events-none transition-all duration-500 group-hover:animate-[spin_3s_linear_infinite]"
                        style={{
                          padding: "2px",
                          background:
                            "linear-gradient(90deg, #47427C, #9A4183, #E18BA6)",
                          WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "destination-out",
                          maskComposite: "exclude",
                        }}
                      />
                      <span className="absolute inset-0 rounded-full bg-linear-to-r from-[#47427C]/20 via-[#9A4183]/20 to-[#E18BA6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">GUIDEBOOK</span>
                    </Link>
                  </React.Fragment>
                ),
            )}
          </div>
        </div>
      </div>
      <Image
        src={"/Background.png"}
        alt="background"
        fill
        className="object-cover object-center z-0 h-screen w-full"
        priority
      />
    </section>
  );
};

export default Landing;
