'use client'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

interface DataFAQ {
    id: number;
    question: string;
    answer: string[];
}

const IsiFaq = () => {
    const [openId, setOpenId] = React.useState<number | null>(null);

    const toggleOpen = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    const dataFAQ: DataFAQ[] = [
        {
            id: 1,
            question: "Apa kriteria untuk mengikuti perlombaan Ajisaka 2026?",
            answer: [
                "Merupakan mahasiswa/i Diploma atau S1 berstatus aktif hingga pelaksanaan Festival Ajisaka 2026.",
                "Satu tim wajib berasal dari universitas yang sama. Diperbolehkan berasal dari fakultas, program studi, dan angkatan yang berbeda.", "Mengisi formulir pendaftaran.",
                "Memenuhi kelengkapan administrasi",
                "Bersedia mengikuti keseluruhan tahapan kompetisi dan rangkaian Festival Ajisaka 2026."
            ]
        }, 
        {
            id: 2,
            question: "Apakah boleh mengikuti lebih dari satu lomba?",
            answer: [
                "Untuk mata lomba Arjuna yang bersifat individu, peserta hanya diperbolehkan mengikuti satu perlombaan saja. Untuk mata lomba lainnya yang bersifat tim, ketua tidak diperkenankan untuk mengikuti lebih dari satu lomba sementara anggota tim diperbolehkan dengan catatan apabila anggota tim harus melakukan presentasi di dua mata lomba saat Babak Final di saat bersamaan nanti maka panitia tidak akan memberikan perlakuan istimewa. Ketentuan peserta dapat dibaca lebih lengkap dalam Panduan Babak Seleksi tiap mata lomba."
            ]
        }, 
        {
            id: 3,
            question: "Satu tim dapat berisi berapa anggota?",
            answer: [
                "Setiap mata lomba memiliki ketentuan peserta masing-masing. Informasi lebih lanjut dapat dilihat pada Panduan Babak Seleksi masing-masing mata lomba. ",
            ]
        },
        {
            id: 4,
            question: "Lomba diadakan secara daring atau luring?",
            answer: [
                "Perlombaan Ajisaka terdiri dari dua babak, yaitu babak seleksi dan babak final. Pada babak seleksi, peserta akan mengumpulkan karya secara daring. Setelah itu akan dipilih 5 tim sebagai finalis yang akan melangsungkan babak final secara luring di Universitas Gadjah Mada"
            ]
        }, 
        {
            id: 5,
            question: "Bagaimana cara mendaftar Perlombaan Ajisaka 2026?",
            answer: [
                "Menuju laman situs web ajisaka2026.com.",
                "Menuju halaman web lomba yang akan diikuti.",
                "Mengisi formulir pendaftaran dan melakukan pembayaran.",
                "Menunggu email verifikasi dari panitia dalam 1x24 jam."
            ]
        }
    ]

    return (
        <section className='w-full flex flex-col items-center justify-start relative px-4 md:px-8 lg:px-16 py-7 self-stretch min-h-screen'>
            <div className='w-full h-full flex flex-col items-center justify-center p-0 md:p-4 gap-4 md:gap-6'>
                {dataFAQ.map((item) => {
                    const isItemOpen = openId === item.id;
                    return (
                    <div 
                        className="w-full p-6 md:p-8 lg:p-12 flex flex-col justify-start rounded-4xl border-r border-b-2 border-l border-white bg-white/10 backdrop-blur-md box-border shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer"
                        key={item.id}
                        onClick={() => toggleOpen(item.id)}
                    >
                    {/* Header Pertanyaan */}
                    <div className='w-full flex items-center justify-between gap-4'>
                        <h1 className='flex-1 text-white font-montserrat text-sm md:text-lg lg:text-xl font-normal tracking-normal '>
                            {item.question}
                        </h1>
                        <IoIosArrowDown className={`text-white text-xl md:text-2xl shrink-0 transition-transform duration-300 ease-in-out ${isItemOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Konten Jawaban dengan Animasi */}
                    <div className={`grid transition-all duration-300 ease-in-out ${isItemOpen ? 'grid-rows-[1fr] opacity-100 mt-4 md:mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                        {isItemOpen && (
                            <hr className='text-white/50'/>
                        )}
                        <div className={`overflow-hidden ${isItemOpen ? 'mt-4' : ''} `}>
                            <ul className='list-disc pl-5 text-white font-montserrat text-xs md:text-base lg:text-lg opacity-90 leading-relaxed'>
                                {item.answer.map((answer, index) => (
                                    <li className='mb-2' key={index}> {answer}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                )})}
            </div>
            
            {/* ADA PERTANYAAN LAIN Section */}
            <div className='w-full h-auto flex flex-col items-center justify-center mt-12 md:mt-16 lg:mt-20 gap-6 md:gap-8'>
                <div className='w-full flex items-center justify-start'>
                    <h1 className='font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold leading-tight bg-[linear-gradient(102deg,#FBD596_0.77%,#FBC364_22.3%,#FBD596_41.41%,#FBC364_65.41%,#FBD596_87.21%,#FBC364_107.16%)] bg-clip-text text-transparent text-left'>
                        ADA PERTANYAAN LAIN?
                    </h1>
                </div>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-5 pb-10'>
                    <h4 className='w-full md:w-2/3 lg:w-3/4 text-white font-playfair text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed md:leading-tight'>
                        Dilarang memasukan pertanyaan yang tidak berhubungan dengan Festival Ajisaka dan/atau berhubungan dengan SARA
                    </h4>
                    <button
                        className='text-white font-mont px-6 md:px-8 py-3 rounded-full text-sm md:text-lg lg:text-xl font-montserrat font-semibold cursor-pointer text-center w-full md:w-auto hover:opacity-90 transition-opacity whitespace-nowrap shrink-0'
                        style={{ background: 'linear-gradient(90deg, #47427C -10.14%, #9A4183 53.2%, #E18BA6 116.55%)' }}
                    >
                        LINK SPREADSHEET
                    </button>
                </div>
            </div>
        </section >
    )
}

export default IsiFaq
