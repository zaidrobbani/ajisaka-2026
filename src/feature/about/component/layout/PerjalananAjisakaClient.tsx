'use client'

import React, { useMemo, useState } from 'react'
import PerjalananAjisakaCarousel from './PerjalananAjisakaCarousel'
import type { PerjalananAjisaka } from './PerjalananAjisaka'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

type PerjalananAjisakaClientProps = {
    images: string[]
    perjalanan: PerjalananAjisaka[]
}

const PerjalananAjisakaClient: React.FC<PerjalananAjisakaClientProps> = ({ images, perjalanan }) => {
    const sortedPerjalanan = useMemo(() => {
        return [...perjalanan].sort((first, second) => Number(second.years) - Number(first.years))
    }, [perjalanan])

    const renderDescription = (text: string) => {
        const formatted = text.replace(/(".*?")/g, "<span class='font-bold'>$1</span>");

        return (
            <span dangerouslySetInnerHTML={{ __html: formatted }} />
        );
    };

    const defaultYear = sortedPerjalanan[0]?.years ?? ''
    const [activeYear, setActiveYear] = useState(defaultYear)
    const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false)

    const activePerjalanan = useMemo(() => {
        return sortedPerjalanan.find((item) => item.years === activeYear) ?? sortedPerjalanan[0]
    }, [activeYear, sortedPerjalanan])

    return (
        <section className='w-full min-h-screen flex flex-col items-center justify-center bg-[#02A882] relative mt-5 xs:mt-10 md:mt-20 xl:mt-30'>
            <div className='pointer-events-none absolute left-1/2 -translate-x-1/2 w-full flex items-center justify-center top-0 -translate-y-[85%] z-0'>
                <div className='relative block w-[150%] '>
                    <Image
                        src={"/Group 42.webp"}
                        alt='Bunga Daun'
                        width={500}
                        height={500}
                        className='block w-full h-auto object-cover z-0 '
                        style={{ '--initial-rotate': '0deg' } as React.CSSProperties}
                    />
                </div>
            </div>
            <div className='pointer-events-none absolute left-0 top-0 w-full -translate-y-[99%] z-0' >
                <Image
                    src={"/Gelombang Hijau Atas 3.webp"}
                    alt='Gelombang Hijau Atas'
                    width={1920}
                    height={1080}
                    className='block w-full h-auto object-cover z-0'
                />
                <div className='absolute bottom-0 left-0 h-3 sm:h-6 xl:h-20 w-full bg-[linear-gradient(180deg,rgba(2,168,130,0)_0%,#02A882_100%)]' />
            </div>
            <div className='flex items-center justify-center w-full px-4 py-10 md:p-18 gap-4'>
                <div className='w-full h-full flex flex-col md:flex-row items-start justify-center gap-5 md:gap-8'>
                    <div className='w-full md:w-1/2 h-auto md:h-180 flex flex-col items-start md:items-start justify-start gap-5'>
                        <h1 className='w-full text-center md:text-left font-playfair leading-none md:leading-12 xl:leading-22  font-semibold bg-[linear-gradient(102deg,#FBD596_0.77%,#FBC364_22.3%,#FBD596_41.41%,#FBC364_65.41%,#FBD596_87.21%,#FBC364_107.16%)] bg-clip-text text-transparent text-5xl md:text-5xl xl:text-8xl text-wrap '>PERJALANAN AJISAKA</h1>
                        <div className='flex flex-col items-center justify-between w-full h-auto md:h-full gap-6'>
                            <div className='relative w-full md:hidden'>
                                <div className='w-full flex items-center justify-center gap-2 h-auto shrink-0 p-3 rounded-3xl bg-[linear-gradient(0deg,rgba(15,44,74,1)_0%,rgba(15,44,74,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.10)_100%)]'>
                                    <button
                                        type='button'
                                        className='w-full flex items-center gap-2 px-4 py-2 rounded-2xl bg-[linear-gradient(102deg,#FFC35F_0.77%,#FFAF28_22.3%,#FFC35F_41.41%,#FFAF28_65.41%,#FFC35F_87.21%,#FFAF28_107.16%),linear-gradient(102deg,rgba(251,213,150,0.10)_0.77%,rgba(251,195,100,0.10)_22.3%,rgba(251,213,150,0.10)_41.41%,rgba(251,195,100,0.10)_65.41%,rgba(251,213,150,0.10)_87.21%,rgba(251,195,100,0.07)_107.16%)] text-primary-100 font-montserrat text-2xl leading-normal tracking-tight font-semibold'
                                    >
                                        <span className='flex-1 text-center'>{activeYear}</span>
                                    </button>
                                        <ChevronDown onClick={() => setIsYearDropdownOpen((open) => !open)} className={`size-10 text-white transition-transform cursor-pointer ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
                                </div>
                                <div
                                    className={`absolute top-[calc(100%+8px)] left-0 z-30 w-full overflow-hidden rounded-3xl bg-[linear-gradient(0deg,rgba(15,44,74,1)_0%,rgba(15,44,74,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.10)_100%)] origin-top transition-all duration-300 ease-out ${
                                        isYearDropdownOpen
                                            ? 'translate-y-0 scale-y-100 opacity-100 max-h-120 p-3 pointer-events-auto'
                                            : '-translate-y-3 scale-y-95 opacity-0 max-h-0 p-5 pointer-events-none'
                                    }`}
                                >
                                    <div className='flex flex-col gap-2 '>
                                        {sortedPerjalanan.map((item) => {
                                            const isActive = item.years === activeYear

                                            return (
                                                <button
                                                    key={item.id}
                                                    type='button'
                                                    onClick={() => {
                                                        setActiveYear(item.years)
                                                        setIsYearDropdownOpen(false)
                                                    }}
                                                    className={`w-full px-4 py-2 rounded-2xl text-center font-montserrat text-xl leading-normal tracking-tight font-medium transition-all cursor-pointer ${
                                                        isActive
                                                            ? 'text-primary-100 bg-[linear-gradient(102deg,#FFC35F_0.77%,#FFAF28_22.3%,#FFC35F_41.41%,#FFAF28_65.41%,#FFC35F_87.21%,#FFAF28_107.16%),linear-gradient(102deg,rgba(251,213,150,0.10)_0.77%,rgba(251,195,100,0.10)_22.3%,rgba(251,213,150,0.10)_41.41%,rgba(251,195,100,0.10)_65.41%,rgba(251,213,150,0.10)_87.21%,rgba(251,195,100,0.07)_107.16%)]'
                                                            : 'text-white bg-white/10 backdrop-blur-2xl'
                                                    }`}
                                                >
                                                    {item.years}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className='w-full min-h-0 flex flex-col items-start justify-start gap-2 md:overflow-y-auto pr-1'>
                                <p className='text-white font-montserrat text-xl font-bold leading-tight tracking-tight'>{activePerjalanan?.title}</p>
                                <p className='text-white font-montserrat text-xl font-normal leading-tight tracking-tight'>{activePerjalanan?.description}</p>
                            </div>
                            <div className='hidden md:flex w-3/4 h-auto shrink-0 flex-col flex-wrap items-center justify-center gap-3 p-3 rounded-3xl bg-[linear-gradient(0deg,rgba(15,44,74,1)_0%,rgba(15,44,74,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.10)_100%)]'>
                                {sortedPerjalanan.map((item, _) => {
                                    const isActive = item.years === activeYear

                                    return (
                                        <button
                                            key={item.id}
                                            type='button'
                                            onClick={() => setActiveYear(item.years)}
                                            className={`w-full px-4 py-2 rounded-2xl text-center font-montserrat text-lg leading-normal tracking-tight font-medium transition-all cursor-pointer ${
                                                isActive
                                                    ? 'text-primary-100 bg-[linear-gradient(102deg,#FFC35F_0.77%,#FFAF28_22.3%,#FFC35F_41.41%,#FFAF28_65.41%,#FFC35F_87.21%,#FFAF28_107.16%),linear-gradient(102deg,rgba(251,213,150,0.10)_0.77%,rgba(251,195,100,0.10)_22.3%,rgba(251,213,150,0.10)_41.41%,rgba(251,195,100,0.10)_65.41%,rgba(251,213,150,0.10)_87.21%,rgba(251,195,100,0.07)_107.16%)]'
                                                    : 'text-white bg-white/10 backdrop-blur-2xl'
                                            }`}
                                        >
                                            {item.years}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 h-full flex flex-col items-center justify-center gap-4'>
                        <PerjalananAjisakaCarousel images={images} />
                    </div>
                </div>
            </div>
            <div className='pointer-events-none absolute left-0 top-full z-10 w-full'>
                <Image
                    src={"/Gelombang Hijau Atas 3.webp"}
                    alt='Gelombang Hijau Bawah'
                    width={1920}
                    height={1080}
                    className='block w-full h-auto object-cover scale-y-[-1]'
                />
                <div className='absolute top-0 left-0 h-3 sm:h-6 xl:h-20 w-full bg-[linear-gradient(180deg,#02A882_0%,rgba(2,168,130,0)_100%)]' />
            </div>
        </section>
    )
}

export default PerjalananAjisakaClient
