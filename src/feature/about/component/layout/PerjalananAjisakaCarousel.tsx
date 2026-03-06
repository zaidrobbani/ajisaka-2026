'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/swiper-bundle.css'
import { useBreakpoint } from '@/lib/useBreakpoint'

type PerjalananAjisakaCarouselProps = {
    images: string[]
}

const PerjalananAjisakaCarousel: React.FC<PerjalananAjisakaCarouselProps> = ({ images }) => {
    const swiperRef = useRef<SwiperType | null>(null)

    const handleMouseEnter = () => {
        swiperRef.current?.autoplay?.stop()
    }

    const handleMouseLeave = () => {
        swiperRef.current?.autoplay?.start()
    }

    const breakpoint = useBreakpoint()
    const isMobile = breakpoint === 'xs' || breakpoint === 'sm'

    return (
        <div
            className='relative w-full md:w-5/6 h-130 md:h-180 rounded-2xl overflow-hidden'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Swiper
                direction='vertical'
                loop={true}
                slidesPerView={2.2}
                spaceBetween={!isMobile ? -152 : 20}
                grabCursor={true}
                speed={2800}
                modules={[Autoplay]}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
                className='h-full w-full'
            >
                {images.map((src, index) => (
                    <SwiperSlide key={`${src}-${index}`}>
                        <div className='relative w-full h-60 rounded-xl border-4 border-white overflow-hidden'>
                            <Image
                                src={src}
                                alt={`Perjalanan Ajisaka ${index + 1}`}
                                fill
                                sizes='50vw'
                                className='object-cover'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='pointer-events-none absolute bottom-0 left-0 z-20 w-full h-40 rounded-b-2xl border-x-4 border-b-4 border-[#02A882] bg-[linear-gradient(0deg,#02A882_0%,rgba(2,168,130,0)_100%)]' />
        </div>
    )
}

export default PerjalananAjisakaCarousel
