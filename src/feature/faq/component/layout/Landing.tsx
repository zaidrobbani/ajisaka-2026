import Navbar from '@/shared/navbar/Navbar'
import Image from 'next/image'

const Landing = () => {
    return (
        <section className='w-full h-auto flex flex-col items-center justify-start relative p-7 self-stretch'>
            <Navbar/>
            <Image  
                src={"/Background.png"}
                alt='background'
                fill
                className='object-cover object-center z-0'
                priority
            />
            <div className='w-full h-auto flex flex-col items-center justify-center p-3 self-stretch'>
                <div className='w-auto h-auto flex items-center justify-center px-4 sm:px-5 md:px-7 py-1 bg-gradient-200 rounded-full shadow-lg relative mt-20'>
                    <span className='text-white font-playfair text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-center '>
                        WIRASA: Wira Swarakan Rasa
                    </span>
                </div>
                <div className='w-full max-w-4xl h-auto flex items-center justify-center drop-shadow-2xl mt-10 md:mt-16 relative z-10'>
                    <Image
                        src={"/image 39.webp"}
                        alt='FAQ'
                        width={1200}
                        height={500}
                        className='w-[80%] md:w-[60%] lg:w-[50%] xl:w-[45%] h-auto object-contain'
                    />
                </div>
            </div>
        </section>
    )
}

export default Landing
