'use client'
import Image from 'next/image'
import Navbar from '@/shared/navbar/Navbar'
import { useBreakpoint } from '@/lib/useBreakpoint'

const Landing = () => {
    const breakpoint = useBreakpoint();
    
    const getCurrentBreakpoint = () => {
        return breakpoint;
    };

    return (
        <section className='w-full min-h-dvh flex flex-col items-center justify-start text-white relative self-stretch overflow-hidden pb-32 lg:pb-48'>
            <Navbar />
            <Image
                src={"/image-51.webp"}
                alt='Ombak hijau pojok atas'
                width={500}
                height={500}
                className='w-164 sm:w-280 md:w-396 lg:w-450 absolute object-cover top-0 lg:-top-5 z-10 scale-x-[-1]'
            />
            <Image  
                src={"/Background.png"}
                alt='background'
                fill
                className='object-cover object-center z-0'
                priority
            />
            <Image
                src={"/image-53.webp"}
                alt='Ombak ungu pojok kanan atas'
                width={500}
                height={500}
                className='w-64 sm:w-80 md:w-96 lg:w-180 absolute object-cover -top-10 lg:-top-25 -right-10 z-10 scale-x-[-1] animate-[rootWave_9s_ease-in-out_infinite]'
            />
            <Image
                src={"/image-53.webp"}
                alt='Ombak ungu pojok kiri atas'
                width={500}
                height={500}
                className='w-64 sm:w-80 md:w-96 lg:w-180 absolute object-cover -top-10 lg:-top-25 -left-10 z-10 animate-[rootWave_9s_ease-in-out_infinite]'
            />
            
            <div className='w-full flex flex-col-reverse sm:flex-row items-center justify-center z-20 sm:mt-28 md:mt-32 px-4 '>
                    <Image
                        src={"/wirasa-1.png"}
                        alt='WIRASA'
                        width={500}
                        height={500}
                        className='object-contain w-40 sm:w-56 md:w-72 lg:w-96 drop-shadow-2xl relative z-10'
                    />
                <div className='w-full sm:w-1/3 max-w-4xl flex flex-col items-center sm:items-start justify-center'>
                    <Image
                        src={"/image-18-1.webp"}
                        alt='hiasan'
                        width={500}
                        height={500}
                        className='object-contain w-32 sm:w-48 md:w-64 lg:w-80 mb-4 sm:mb-6'
                    />
                    {getCurrentBreakpoint() === 'sm' || getCurrentBreakpoint() === 'xs' ? (
                        <Image 
                            src={"/image-43.png"}
                            alt='Tulisan Ajisaka'
                            width={800}
                            height={500}
                            className='object-contain w-72 sm:w-80 md:w-112.5 lg:w-150 '
                        />
                    ): (
                        <Image 
                            src={"/image-42.webp"}
                            alt='Tulisan Ajisaka'
                            width={800}
                            height={500}
                            className='object-contain w-72 sm:w-80 md:w-112.5 lg:w-150 mb-8 sm:mb-12'
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Landing
