"use client"
import { useGsapScrollReveal } from "@/lib/useGsapScrollReveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Sponsor = ({images} : {images: string[]}) => {

    const sectionRef = React.useRef<HTMLElement | null>(null);
    const contentRef = React.useRef<HTMLElement | null>(null);

    useGsapScrollReveal({
        sectionRef,
        contentRef
    })


    return (
        <section ref={sectionRef} className="w-full h-auto flex flex-col items-center justify-start relative">
            <Link href={"https://bit.ly/PengumpulanFilmFestivalAjisaka"} className="w-[80%] flex items-center justify-center px-6 sm:px-10 md:px-14 lg:px-20 py-1 sm:py-2.5 md:py-3 rounded-full bg-[linear-gradient(90deg,#47427C_-10.14%,#9A4183_53.2%,#E18BA6_116.55%),linear-gradient(0deg,rgba(212,61,106,0.65)_0%,rgba(212,61,106,0.65)_100%)] text-white text-center font-montserrat font-normal hover:font-semibold text-xs sm:text-base md:text-lg lg:text-xl tracking-wide mt-5 lg:mt-8 gap-3 group z-90 overflow-hidden relative hover:scale-105 hover:shadow-[0_0_30px_rgba(154,65,131,0.8)] transition-all duration-300">
                <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative z-10">LINK SUBMITION FILM</span>
                <FaArrowRightLong className="relative z-10 group-hover:animate-[bounceX_1s_ease-in-out_infinite]"/>
            </Link>
            <div className="w-full h-auto flex flex-row items-center justify-between absolute top-12 left-0 right-0 z-10 ">
                {/* Decorative Curtains — vw-based so they always scale with viewport */}
                {/* Left curtain */}
                <Image
                    src={"/tirai-1.png"}
                    alt="Tirai Kiri"
                    width={500}
                    height={500}
                    className="absolute object-contain left-0 z-10"
                    style={{
                        width: "12vw",
                        top: "-6.5vw",
                    }}
                />
                {/* Right curtain (mirrored) */}
                <Image
                    src={"/tirai-1.png"}
                    alt="Tirai Kanan"
                    width={500}
                    height={500}
                    className="absolute object-contain right-0 scale-x-[-1] z-10"
                    style={{
                        width: "12vw",
                        top: "-6.5vw",
                    }}
                />

                {/* Bottom curtain reflections (subtle) */}
                <Image
                    src={"/tirai-1.png"}
                    alt="Tirai Kiri Bawah"
                    width={500}
                    height={500}
                    className="absolute object-contain left-0 scale-y-[-1] opacity-40 z-10"
                    style={{
                        width: "12vw",
                        top: "10vw",
                    }}
                />
                <Image
                    src={"/tirai-1.png"}
                    alt="Tirai Kanan Bawah"
                    width={500}
                    height={500}
                    className="absolute object-contain right-0 scale-x-[-1] scale-y-[-1] opacity-40 z-10"
                    style={{
                        width: "12vw",
                        top: "10vw",
                    }}
                />

                {/* Pink ornamental border — top row */}
                <Image
                    src={"/pink-atas-2.png"}
                    alt="Pink atas"
                    width={500}
                    height={500}
                    className="absolute object-cover w-full z-15"
                    style={{
                        top: "-5.5vw",
                    }}
                />
                {/* Pink ornamental border — bottom row (mirrored) */}
                <Image
                    src={"/pink-atas-2.png"}
                    alt="Pink bawah"
                    width={500}
                    height={500}
                    className="absolute object-cover w-full scale-y-[-1] z-15"
                    style={{
                        top: "10vw",
                    }}
                />

            </div>

            {/* Title - Responsive */}
            <div ref={contentRef as React.RefObject<HTMLDivElement>}>
                <div
                    className="w-full flex items-center justify-center mx-4 px-4 "
                    style={{ marginTop: "20vw" }}
                    
                >
                    <h1 className="text-center font-playfair font-semibold leading-tight bg-[linear-gradient(102deg,#FBD596_0.77%,#FBC364_22.3%,#FBD596_41.41%,#FBC364_65.41%,#FBD596_87.21%,rgba(251,195,100,0.75)_107.16%)] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                        Sponsor &<br className="sm:hidden" /> Media Partner
                    </h1>
                </div>

                {/* Cards - Responsive Grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-8 md:px-10 mt-6 sm:mt-8 md:mt-10 max-w-7xl mx-auto">
                    {images.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center h-40 sm:h-48 md:h-56 lg:h-64 xl:h-70 flex-col rounded-3xl sm:rounded-4xl md:rounded-[40px] lg:rounded-[48px] border-r border-l border-b-2 border-white bg-[rgba(255,255,255,0.10)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)]"
                        >
                            <Image
                                src={item}
                                alt={`Sponsor ${index + 1}`}
                                width={500}
                                height={500}
                                className="object-contain h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsor;
