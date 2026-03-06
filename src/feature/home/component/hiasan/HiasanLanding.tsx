import Image from 'next/image'
import React from 'react'

const HiasanLanding = () => {
    return (
        <React.Fragment>
            <Image
                src={"/image 3 (1).png"}
                alt='hiasan-pojok'
                width={500}
                height={500}
                className='absolute top-0 left-0 w-80 xs:w-120 sm:w-150 md:w-160 lg:w-160 xl:w-200 2xl:w-240 object-cover z-0'
            />
            <Image
                src={"/Bunga Daun 4.png"}
                alt='Bunga Daun'
                width={500}
                height={500}
                className='absolute top-0 -right-2 sm:-right-3 md:-right-4 lg:-right-5 w-32 sm:w-40 md:w-44 lg:w-40 xl:w-80 2xl:w-60 z-10 object-cover'
            />
            <Image
                src={"/Bunga Daun 3.png"}
                alt='Bunga Daun'
                width={500}
                height={500}
                className='absolute -top-1 sm:-top-2 -right-4 sm:-right-15 md:-right-8 lg:-right-12 xl:-right-15 w-64 sm:w-70 md:w-64 lg:w-80 xl:w-120 z-0 object-cover'
            />
            <Image
                src={"/image 4.png"}
                alt='image 4'
                width={500}
                height={500}
                className='absolute -bottom-20 sm:-bottom-30 md:-bottom-40 lg:-bottom-50 xl:-bottom-60 -right-40 sm:-right-60 md:-right-80 lg:-right-120 xl:-right-135 w-160 xs:w-7xl sm:w-400 md:w-480 lg:w-540 xl:w-600 z-0 object-cover'
            />
            <Image
                src={"/Bunga Daun 1.png"}
                alt='Bunga Daun 1'
                width={500}
                height={500}
                className='absolute -bottom-8 sm:-bottom-12 md:-bottom-16 lg:-bottom-20 -left-4 sm:-left-6 md:-left-8 lg:-left-10 w-28 sm:w-40 md:w-56 lg:w-70 xl:w-85 z-10 object-cover'
            />
            <Image
                src={"/Bunga Daun 2.png"}
                alt='Bunga Daun 2'
                width={500}
                height={500}
                className='absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 -left-4 sm:-left-6 md:-left-8 lg:-left-10 w-36 sm:w-52 md:w-72 lg:w-90 xl:w-110 z-0 object-cover rotate-3'
            />
            <Image
                src={"/Bunga Daun 2 (1).png"}
                alt='Bunga Daun 3'
                width={500}
                height={500}
                className='absolute -bottom-32 sm:-bottom-48 md:-bottom-64 lg:-bottom-80 xl:-bottom-95 -left-12 sm:-left-20 md:-left-28 lg:-left-36 xl:-left-40 w-40 sm:w-56 md:w-72 lg:w-88 xl:w-100 object-cover rotate-28 z-990'
            />
        </React.Fragment>
    )
}

export default HiasanLanding
