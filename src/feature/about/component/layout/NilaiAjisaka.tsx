import React from 'react'
import Bintang from '../icons/Bintang'
import Jaringan from '../icons/Jaringan';
import Tas from '../icons/Tas';
import Speaker from '../icons/Speaker';
import Money from '../icons/Money';
import Gedung from '../icons/Gedung';
import Image from 'next/image';

interface NilaiAjisaka {
    id: number;
    title: string;
    icon: React.ReactNode;
    description: string;
}

const NilaiAjisaka = () => {

    const nilaiAjisaka: NilaiAjisaka[] = [
        {
            id: 1,
            title: "Jaringan",
            icon: <Jaringan scale={0.8} position="relative" className="z-10"/>,
            description:'Jaringan kerja dengan Insan Kreatif di seluruh Indonesia.'
        }, 
        {
            id: 2,
            title: "Ajang",
            icon: <Bintang scale={0.8} position="relative" className="z-10"/>,
            description:'Ajang untuk berkreasi dan berekspresi.'
        },
        {
            id: 3,
            title: "Pengalaman",
            icon: <Tas scale={0.8} position="relative" className="z-10"/>,
            description: "Jaringan kerja dengan tenaga profesional di bidang komunikasi."
        },
        {
            id: 4,
            title: "Paparan",
            icon: <Speaker scale={0.8} position="relative" className="z-10"/>,
            description: "Paparan brand dari seluruh peserta dan panitia."
        },
        {
            id: 5,
            title: "Penawaran",
            icon: <Money scale={0.8} position="relative" className="z-10"/>,
            description: "Penawaran hadiah hingga jutaan rupiah untuk para Jawara."
        },
        {
            id: 6,
            title: "Lomba",
            icon: <Gedung scale={0.8} position="relative" className="z-10"/>,
            description: "Brief lomba berdasarkan kasus riil industri komunikasi."
        }
    ]

    return (
        <section className='w-full min-h-screen relative flex flex-col items-center justify-start p-7 '>
            <Image
                src="/Bunga Daun 2 (1).png"
                alt="Bunga Daun"
                width={500}
                height={500}
                className="absolute -top-[25vw] -right-[12vw] rotate-30 w-[28vw] z-1000 scale-x-[-1] animate-[leafSway_6s_ease-in-out_infinite]"
                style={{ "--initial-rotate": "0deg" } as React.CSSProperties}
            />
            <div className='w-full flex flex-col items-center justify-start gap-5 '>
                <div className='w-full h-auto flex items-start justify-center'>
                    <h1 className='font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold leading-tight bg-[linear-gradient(102deg,#FBD596_0.77%,#FBC364_22.3%,#FBD596_41.41%,#FBC364_65.41%,#FBD596_87.21%,#FBC364_107.16%)] bg-clip-text text-transparent text-center '>
                        NILAI-NILAI AJISAKA
                    </h1>
                </div>
                <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-items-center gap-y-10 gap-x-6 '>
                    {nilaiAjisaka.map((item, index) => (
                        <div className='w-full max-w-88 flex flex-col items-center justify-start h-auto gap-4' key={index}>
                            <div className='w-50 h-50 aspect-square bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1),inset_0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)] transition-shadow duration-300 ease-in-out'>
                                {item.icon}
                            </div>
                            <h4 className='text-white text-center font-montserrat text-2xl font-normal leading-tight tracking-tight w-5/6'>
                                {item.description}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
 
export default NilaiAjisaka
