'use client'
import Image from 'next/image'
import React from 'react'
import { EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';

const Janamejaya: React.FC<{images: string[]}> = ({images}) => {
    return (
        <section className='w-full flex items-center justify-start flex-col relative self-stretch overflow-x-clip overflow-y-visible'>
            <div className="w-full relative z-20 flex flex-col pointer-events-none -mt-24 sm:-mt-28 md:-mt-36 lg:-mt-48 xl:-mt-64">
                <div className="w-full leading-0 relative">
                    <div className='w-full flex items-end justify-between absolute -bottom-[10%] left-0 z-[-1] pointer-events-none'>
                        <div className='relative w-[50%]'>
                            <Image
                                src={"/image-10.webp"}
                                alt='ombak ungu kiri'
                                width={500}
                                height={500}
                                className='w-full h-auto block '
                            />
                        </div>
                        <div className='relative w-[50%]'>
                            <Image
                                src={"/image-10.webp"}
                                alt='ombak ungu kanan'
                                width={500}
                                height={500}
                                className='w-full h-auto block scale-x-[-1] '
                            />
                        </div>
                    </div>

                    <Image
                        src={"/image-50.webp"}
                        alt='Ombak Hijau atas'
                        width={1920}
                        height={500}
                        className="w-full h-auto block relative z-10"
                    />
                </div>
                <div className="w-full leading-0 -mt-px md:-mt-1 lg:-mt-2">
                    <Image
                        src={"/image-51.webp"}
                        alt='Ombak Hijau bawah'
                        width={1920}
                        height={500}
                        className="w-full h-auto block"
                    />
                </div>
            </div>

            <div className='w-full flex items-start justify-between absolute -top-[13%] xs:-top-[7%] left-0 z-0 pointer-events-none'>
                <div className='relative w-1/2'>
                    <Image
                        src={"/image-53.webp"}
                        alt='akar bawah'
                        width={500}
                        height={500}
                        className='w-full h-auto block animate-[rootWave_9s_ease-in-out_infinite]'
                    />
                </div>
                <div className='relative w-1/2'>
                    <Image
                        src={"/image-53.webp"}
                        alt='akar bawah'
                        width={500}
                        height={500}
                        className='w-full h-auto block scale-x-[-1] animate-[rootWave_9s_ease-in-out_infinite]'
                    />
                </div>
            </div>

            <div className='flex flex-col w-full items-center justify-center p-4 md:p-10 relative z-10 gap-6 lg:gap-12 mt-10 sm:mt-16 md:mt-20 pb-20 md:pb-32'>
                <h1 className='font-playfair text-4xl xs:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold leading-normal bg-[linear-gradient(102deg,#FBD596_0.77%,#FBC364_22.3%,#FBD596_41.41%,#FBC364_65.41%,#FBD596_87.21%,rgba(251,195,100,0.75)_107.16%)] bg-clip-text text-transparent z-0 text-center tracking-wide'>
                    JANAMEJAYA
                </h1>
                <div className='w-full flex items-center justify-center self-stretch z-10 mx-auto mt-4 md:mt-8'>
                    <Swiper
                        effect='coverflow'
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        loop={true}
                        spaceBetween={-85}
                        coverflowEffect={{
                            rotate: 35,
                            stretch: 10,
                            depth: -300,
                            modifier: 1.5,
                            scale: 0.85,
                            slideShadows: false,
                        }}
                        modules={[EffectCoverflow]}
                        className='w-full h-auto py-10 overflow-visible! '
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index} className='w-65 sm:w-[320px]! md:w-120! aspect-4/3 relative transition-all duration-300'>
                                <div
                                    className="w-full h-full rounded-4xl p-2.5 max-lg:p-1.5"
                                    style={{
                                    background: "linear-gradient(135deg, #0E4A4A 0%, #02A882 50%, #A5E7F5 100%)",
                                    }}
                                >
                                    <div className='w-full h-full rounded-3xl overflow-hidden bg-transparent relative'>
                                        <Image
                                            src={src}
                                            alt={`Image ${index}`}
                                            fill
                                            className="object-cover scale-[1.08] transition-all duration-500 hover:scale-[1.15]"  
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section >
    )
}

export default Janamejaya
