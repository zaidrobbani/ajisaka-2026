"use client";

import { useGsapScrollReveal } from "@/lib/useGsapScrollReveal";
import { useRef } from "react";

const Festival = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);

  useGsapScrollReveal({
    sectionRef,
    contentRef,
  });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLOptionElement>}
      className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20 z-99 mt-20 sm:mt-24 md:mt-20 lg:mt-0 h-auto "
      id="festival"
    >
      <div ref={contentRef as React.RefObject<HTMLDivElement>}>
        <div className="w-full h-auto flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-end mb-4 sm:mb-6 md:mb-8 px-4 sm:px-10 md:px-16 lg:px-20 xl:px-32 2xl:px-45 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <h1 className="text-white font-playfair text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight w-full sm:w-3/4">
            Festival Ajisaka UGM 2026: Menyuarakan Rasa dan Membangun Kesadaran
            Kesehatan Mental Melalui Komunikasi
          </h1>
          <button
            className="rounded-full w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-center cursor-pointer text-white text-justify font-montserrat text-xs sm:text-sm whitespace-nowrap hover:font-bold transition-all duration-300 ease-in-out"
            style={{
              background:
                "linear-gradient(90deg, #47427C -10.14%, #9A4183 53.2%, #E18BA6 116.55%)",
            }}
            onClick={() =>
              (window.location.href =
                "https://docs.google.com/document/d/1fTUeMt8VP-2aGyww5G2kINCaDVABuwEqTrkrLfrgJPs/edit?tab=t.0")
            }
          >
            PRESS RELEASE
          </button>
        </div>
        <div className="mx-auto w-full max-w-6xl rounded-3xl sm:rounded-4xl md:rounded-[40px] lg:rounded-[48px] border-b-2 border-r border-l border-white bg-white/10 backdrop-blur-md box-border shadow-[0_4px_4px_rgba(0,0,0,0.25)] px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12">
          <article className="mx-auto max-w-5xl text-justify font-montserrat text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-[-0.3px] text-white">
            <p>
              Festival Ajisaka merupakan ajang perlombaan dalam bidang
              komunikasi di bawah naungan Departemen Ilmu Komunikasi UGM dengan
              jumlah empat mata lomba, yaitu Arjuna, Nakula, Prahasta, dan
              Sadewa. Festival Ajisaka hadir untuk menantang para Insan Kreatif
              di seluruh Indonesia untuk menyumbangkan ide-ide kreatif dan
              inovatif mereka.
            </p>

            <p className="mt-3 sm:mt-4">
              Festival Ajisaka terdiri dari serangkaian acara, meliputi
              Janamejaya (pre-event), roadshow, pengumpulan karya, pengumuman
              finalis, Festival, dan Candradimuka. Festival merupakan pengantar
              sekaligus irisan dari Candradimuka yang dilakukan pada tanggal 3 -
              5 Juni 2026. Acara ini terbagi menjadi beberapa rangkaian, yaitu
              pameran karya, diskusi lintas disiplin, screening film, dan booth
              aktivasi & komunitas. Selain itu, Candradimuka sendiri merupakan
              rangkaian terakhir sebagai puncak dari keseluruhan acara Festival
              Ajisaka yang akan dilaksanakan pada tanggal 5 - 6 Juni 2026.
            </p>

            <p className="mt-3 sm:mt-4">
              Kami berkomitmen untuk berkarya dan berkontribusi sepenuh hati
              demi mendukung kemajuan Insan Kreatif Nusantara. Hal ini
              diharapkan dapat menjadi solusi dari isu yang diangkat dengan
              realisasi melalui perspektif seni, akademisi, serta ilmu
              komunikasi.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Festival;
