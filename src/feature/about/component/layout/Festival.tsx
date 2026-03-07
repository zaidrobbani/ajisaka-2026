"use client";
import React from "react";
import Instagram from "../icons/Instagram";
import Link from "next/link";
import { useGsapScrollReveal } from "@/lib/useGsapScrollReveal";

const Festival = () => {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const contentRef = React.useRef<HTMLElement | null>(null);

  useGsapScrollReveal({
    sectionRef,
    contentRef,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20 z-99 mt-20 sm:mt-24 md:mt-20 lg:mt-0 h-auto "
      id="festival"
    >
      <div ref={contentRef as React.RefObject<HTMLDivElement>}>
        <div className="mx-auto w-full max-w-6xl rounded-3xl sm:rounded-4xl md:rounded-[40px] lg:rounded-[48px] border-b-2 border-r border-l border-white bg-white/10 backdrop-blur-md box-border shadow-[0_4px_4px_rgba(0,0,0,0.25)] px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12 flex flex-col items-center justify-center gap-10">
          <article className="mx-auto max-w-5xl text-justify font-montserrat text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-[-0.3px] text-white">
            <p>
              Festival Ajisaka merupakan ajang perlombaan nasional di bidang
              komunikasi di bawah naungan Departemen Ilmu Komunikasi Universitas
              Gadjah Mada. Tahun ini, Festival Ajisaka mengusung tema
              &quot;WIRASA: Wira Swarakan Rasa&quot; yang berfokus pada isu
              kesehatan mental sebagai persoalan mendesak yang masih kerap
              dianggap tabu dan diliputi stigma sosial di masyarakat. Merespons
              kondisi tersebut, Festival Ajisaka hadir sebagai salah satu
              festival lomba mahasiswa terkemuka di Indonesia yang memberikan
              wadah bagi Insan Kreatif untuk memanfaatkan bidang-bidang ilmu
              komunikasi dalam penyelesaian tantangan global ini.
            </p>
          </article>
          <h5 className="mx-auto max-w-5xl text-justify font-montserrat text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-[-0.3px] text-white">
            Link Feeds Instagram Prolog Janamejaya:
          </h5>
          <Link
            className="rounded-full w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-center cursor-pointer text-white text-justify font-montserrat text-xs sm:text-sm whitespace-nowrap hover:font-bold transition-all duration-300 ease-in-out overflow-hidden relative group hover:scale-105 hover:shadow-[0_0_30px_rgba(154,65,131,0.8)]"
            style={{
              background:
                "linear-gradient(90deg, #47427C -10.14%, #9A4183 53.2%, #E18BA6 116.55%)",
            }}
            href={
              "https://www.instagram.com/p/DU5Xp0mgUqp/?igsh=YzI2azdteGhpeHpl"
            }
          >
            <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <Instagram className="relative z-10 mr-2" />
            <span className="relative z-10">PRESS RELEASE</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Festival;
