"use client"
import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "@/shared/navbar/Navbar";
import Gradasi from "@/feature/home/component/gradasi/Gradasi";
import HiasanLanding from "@/feature/home/component/hiasan/HiasanLanding";

const LandingPage: React.FC<{id: string}> = ({id}) => {
    return (
        <section className="self-stretch w-full h-screen flex flex-col items-center justify-start text-white relative">
        <HiasanLanding />
        <Navbar />
        <div className="absolute -top-5 z-0 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center justify-center w-full h-auto flex-nowrap mb-2">
                <div className="w-auto h-auto flex items-center justify-center px-4 sm:px-5 md:px-7 py-1 bg-gradient-200 rounded-full shadow-lg relative">
                <Image
                    src={"/Matahari 2.png"}
                    alt="Matahari"
                    width={500}
                    height={500}
                    className="block w-16 md:w-20 lg:w-24 xl:w-30 object-cover absolute -left-20 sm:-left-24 md:-left-32 lg:-left-40 xl:-left-55 top-1/2 transform -translate-y-1/2 animate-pulse [animation-duration:3s]"
                />
                <Image
                    src={"/Bulan 2.png"}
                    alt="Bulan"
                    width={500}
                    height={500}
                    className="block w-16 md:w-20 lg:w-24 xl:w-30 object-cover absolute -right-20 sm:-right-24 md:-right-32 lg:-right-40 xl:-right-55 top-1/2 transform -translate-y-1/2 animate-pulse [animation-duration:3s]"
                />
                <span className="text-white font-playfair text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-center">
                    WIRASA: Wira Swarakan Rasa
                </span>
                </div>
            </div>
            <Image
                src={"/image 36.webp"}
                alt="Landing Image"
                width={500}
                height={500}
                className="w-74 sm:w-94 md:w-100 lg:w-130 xl:w-160"
            />
            <div className="flex items-center justify-center w-full h-auto mt-2 px-4">
                <span className="text-white text-center drop-shadow-lg font-montserrat text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium tracking-normal z-10">
                Swarakan Rasamu dengan Berswara Bersamaku
                </span>
            </div>
            </div>
        </div>
        <div className="w-full flex items-center justify-center absolute bottom-1/6">
            <button 
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full inline-flex items-center justify-center gap-10 border border-white/90 bg-white/10 backdrop-blur-md box-border shadow-[0_4px_4px_rgba(0,0,0,0.25)] animate-bounce [animation-duration:1.2s] z-90 cursor-pointer"
                onClick={() => {
                    const element = document.getElementById(id);
                    if (element) {
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - 80;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                        });
                    }
                }}
            >
            <IoIosArrowDown className="text-sm sm:text-base md:text-lg" />
            </button>
        </div>
        <Gradasi />
        </section>
    );
};

export default LandingPage;
