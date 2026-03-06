"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGsapScrollReveal } from "@/lib/useGsapScrollReveal";

const mataLombaData = [
  {
    id: 1,
    image: "/Sadeewa.webp",
    alt: "Sadewa",
    title: "Sadewa -",
    subtitle: "Skippable Ads",
  },
  {
    id: 2,
    image: "/prahasta.webp",
    alt: "Prahasta",
    title: "Prahasta -",
    subtitle: "PR Campaign",
  },
  {
    id: 3,
    image: "/arjuna.png",
    alt: "Arjuna",
    title: "Arjuna -",
    subtitle: "Fotografi Esai",
  },
  {
    id: 4,
    image: "/nakula.png",
    alt: "Nakula",
    title: "Nakula -",
    subtitle: "Riset Populer",
  },
];

const MataInformasi = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);

  useGsapScrollReveal({
    sectionRef,
    contentRef,
  });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLOptionElement>}
      className="w-full h-auto flex flex-col items-center justify-center relative"
    >
        <Image
          src={"/image 8.webp"}
          alt="Awan ungu"
          width={500}
          height={500}
          className="object-cover w-32 sm:w-48 md:w-64 lg:w-80 xl:w-110 absolute -top-20 sm:-top-32 md:-top-48 lg:-top-60 xl:-top-70 2xl:-top-78 right-0 z-10"
        />
        <Image
          src={"/image 7 (1).webp"}
          alt="Awan ungu"
          width={500}
          height={500}
          className="object-cover w-48 sm:w-72 md:w-100 lg:w-140 xl:w-200 absolute -top-20 sm:-top-32 md:-top-48 lg:-top-60 xl:-top-70 left-0 z-10"
        />
      <div ref={contentRef as React.RefObject<HTMLDivElement>}>
        {/* Decorative Clouds - Responsive */}

        {/* Header Section - Responsive */}
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 mt-16 sm:mt-24 md:mt-32 lg:mt-[150px] xl:mt-[200px] gap-4 sm:gap-0">
          <h1 className="text-center sm:text-right text-shadow-[0_10px_8px_rgba(0,0,0,0.3)] font-playfair font-semibold leading-tight bg-[linear-gradient(102deg,#FBD596_0.77%,#FBC364_22.3%,#FBD596_41.41%,#FBC364_65.41%,#FBD596_87.21%,#FBC364BF_107.16%)] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-wide">
            INFORMASI
            <br />
            MATA LOMBA
          </h1>
          <Image
            src={"/image 18.webp"}
            alt="garis unik"
            width={500}
            height={500}
            className="hidden sm:block object-cover w-32 sm:w-48 md:w-64 lg:w-80 xl:w-100 2xl:w-120"
          />
        </div>

        {/* Cards Section - Responsive Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-8 md:px-10 mt-6 sm:mt-8 md:mt-10">
          {mataLombaData.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-32 px-4 sm:px-6 md:px-8 flex-col rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[48px] border-r border-l border-b-2 border-white bg-[rgba(255,255,255,0.10)] backdrop-blur-md hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)] transition-shadow duration-300 ease-in-out"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={200}
                height={200}
                className="object-contain w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40"
              />
              <h2 className="w-full mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-[#FBD596] text-center text-shadow-[0_10px_8px_rgba(0,0,0,0.30)] font-montserrat text-sm sm:text-base md:text-lg font-normal leading-normal tracking-[-0.4px]">
                {item.title}
                <br />
                {item.subtitle}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MataInformasi;
