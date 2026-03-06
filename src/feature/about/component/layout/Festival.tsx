import Image from "next/image";
import React from "react";
import Instagram from "../icons/Instagram";

const Festival = () => {
    return (
        <section className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20 z-99 mt-20 sm:mt-24 md:mt-20 lg:mt-0 h-auto " id="festival">
            <div className="mx-auto w-full max-w-6xl rounded-3xl sm:rounded-4xl md:rounded-[40px] lg:rounded-[48px] border-b-2 border-r border-l border-white bg-white/10 backdrop-blur-md box-border shadow-[0_4px_4px_rgba(0,0,0,0.25)] px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12 flex flex-col items-center justify-center gap-10">
                <article className="mx-auto max-w-5xl text-justify font-montserrat text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-[-0.3px] text-white">
                <p>
                    Festival Ajisaka merupakan ajang perlombaan nasional di bidang komunikasi di bawah naungan Departemen Ilmu Komunikasi Universitas Gadjah Mada. Tahun ini, Festival Ajisaka mengusung tema "WIRASA: Wira Swarakan Rasa" yang berfokus pada isu kesehatan mental sebagai persoalan mendesak yang masih kerap dianggap tabu dan diliputi stigma sosial di masyarakat. Merespons kondisi tersebut, Festival Ajisaka hadir sebagai salah satu festival lomba mahasiswa terkemuka di Indonesia yang memberikan wadah bagi Insan Kreatif untuk memanfaatkan bidang-bidang ilmu komunikasi dalam penyelesaian tantangan global ini. 
                </p>
                </article>
                <h5 className="mx-auto max-w-5xl text-justify font-montserrat text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-[-0.3px] text-white">Link Feeds Instagram Prolog Janamejaya:</h5>
                <button
                    className="rounded-full w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-center cursor-pointer text-white text-justify font-montserrat text-xs sm:text-sm whitespace-nowrap"
                    style={{
                        background:
                        "linear-gradient(90deg, #47427C -10.14%, #9A4183 53.2%, #E18BA6 116.55%)",
                    }}
                    >
                    <Instagram className="mr-2" />
                    PRESS RELEASE
                </button>
            </div>
        </section>
    );
};

export default Festival;
