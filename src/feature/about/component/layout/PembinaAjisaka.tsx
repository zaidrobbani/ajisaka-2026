'use client'
import { useGsapScrollReveal } from '@/lib/useGsapScrollReveal';
import Image from 'next/image'
import React from 'react'

const PembinaAjisaka = () => {
    const sectionRef = React.useRef<HTMLElement | null>(null);
    const contentRef = React.useRef<HTMLElement | null>(null);

    useGsapScrollReveal({
        sectionRef,
        contentRef
    })

    return (
        <section ref={sectionRef} className='w-full h-auto flex flex-col items-center justify-start relative p-4 md:p-5 pb-20 md:pb-24 gap-8 md:gap-10 overflow-visible'>
            <Image  
                src={"/Background.png"}
                alt='background'
                fill
                className='object-cover object-center z-0'
                priority
            />
            <div className='w-full flex items-center justify-between absolute top-0'>
                
                <div className='w-full'>
                    <Image
                        src={"/Group 64.webp"}
                        alt='Ombak ungu Kiri'
                        width={500}
                        height={500}
                        className="w-1/3 h-auto object-contain -translate-y-1/4 -translate-x-1/6 absolute left-0 top-0 pointer-events-none animate-[wave_6s_ease-in-out_infinite] z-30"
                    />
                    <Image
                        src={"/Group 65.webp"}
                        alt="Akar Kiri"
                        width={500}
                        height={500}
                        className="w-[clamp(8rem,18vw,20rem)] h-auto object-contain -translate-y-1/20 absolute left-0 top-0 pointer-events-none animate-[rootWave_6s_ease-in-out_infinite] z-2"
                    />
                </div>
                <div className='w-full'>
                    <Image
                        src={"/Group 64.webp"}
                        alt='Ombak ungu Kanan'
                        width={500}
                        height={500}
                        className="w-1/3 h-auto object-contain -translate-y-1/4 translate-x-1/6 absolute right-0 top-0 pointer-events-none animate-[wave_6s_ease-in-out_infinite] z-30 scale-x-[-1]"
                    />
                    <Image
                        src={"/Group 65.webp"}
                        alt="Akar Kanan"
                        width={500}
                        height={500}
                        className="w-[clamp(8rem,18vw,20rem)] h-auto object-contain -translate-y-1/24 absolute right-0 top-0 pointer-events-none animate-[rootWave_6s_ease-in-out_infinite] scale-x-[-1] z-2"
                    />
                </div>
            </div>
            <div ref={contentRef as React.RefObject<HTMLDivElement>} className='z-10'>
                <div className='w-full flex items-center justify-center h-auto z-10 mt-28 md:mt-40'>
                    <h1 className='text-center font-playfair font-semibold bg-[linear-gradient(102deg,#FBD596_0.77%,#FBC364_22.3%,#FBD596_41.41%,#FBC364_65.41%,#FBD596_87.21%,#FBC364_107.16%)] bg-clip-text text-transparent w-[min(92%,900px)] text-[clamp(2.4rem,7vw,6rem)] leading-tight pt-2'>TIM DI BALIK AJISAKA</h1>
                </div>
                <div className='flex flex-col items-center justify-center w-full h-auto gap-3 relative z-10 mt-20'>
                    <div className='w-full flex items-center justify-center'>
                        <div className='relative w-1/4 min-w-55 max-w-105 overflow-visible'>
                            <div className='absolute bottom-0 left-0 w-full h-[clamp(14rem,22vw,20.5rem)] rounded-[317px_317px_24px_24px] overflow-hidden'>
                                <Image
                                    src={'/Rectangle 19.png'}
                                    alt='Background pembina'
                                    fill
                                    className='object-cover object-center'
                                />
                            </div>
                            <Image
                                src={"/Desain tanpa judul 1.webp"}
                                alt='Pembina'
                                width={500}
                                height={500}
                                className='relative z-10 w-full h-full object-contain object-bottom'
                            />
                        </div>
                    </div>
                    <div className='relative z-30 mt-2 w-[min(92%,900px)] md:w-3/4 lg:w-2/3'>
                        <Image
                            src={"/Bunga Daun 10.webp"}
                            alt='Bunga Daun kiri'
                            width={100}
                            height={100}
                            className='pointer-events-none absolute left-0 top-1/2 z-40 h-[clamp(4.5rem,18vw,20rem)] w-[clamp(4.5rem,18vw,20rem)] -translate-x-1/2 -translate-y-1/2 object-cover'
                        />
                        <Image
                            src={"/Bunga Daun 10.webp"}
                            alt='Bunga Daun kanan'
                            width={100}
                            height={100}
                            className='pointer-events-none absolute right-0 top-1/2 z-40 h-[clamp(4.5rem,18vw,20rem)] w-[clamp(4.5rem,18vw,20rem)] translate-x-1/2 -translate-y-1/2 object-cover scale-x-[-1]'
                        />
                        <div className='relative z-30 flex flex-col items-center justify-center rounded-2xl px-4 md:px-8 py-2.5 md:py-3 bg-white bg-[linear-gradient(102deg,#FFC35F_0.77%,#FFAF28_22.3%,#FFC35F_41.41%,#FFAF28_65.41%,#FFC35F_87.21%,#FFAF28_107.16%)]'>
                            <h3 className='text-center text-primary-100 font-montserrat text-[clamp(1.25rem,2.6vw,1.9rem)] leading-normal tracking-tight font-semibold'>Pembina</h3>
                            <h5 className='text-center self-stretch text-primary-100 font-montserrat leading-normal tracking-tight text-[clamp(0.85rem,1.9vw,1.25rem)] font-normal'>Mashita Phitaloka Fandia Purwaningtyas, S.I.P., M.A.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PembinaAjisaka
