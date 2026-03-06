"use server"
import React from 'react'
import { readdir } from 'fs/promises'
import path from 'path'
import PerjalananAjisakaClient from './PerjalananAjisakaClient'

export interface PerjalananAjisaka {
    id: number;
    years: string;
    title: string;
    description: string;
}

const PerjalananAjisaka = async () => {
    const perjalananDir = path.join(process.cwd(), 'public', 'PerjalananAjisaka')
    const files = await readdir(perjalananDir)
    const images = files
        .filter((file) => /\.(png|jpe?g|webp|avif|gif|svg)$/i.test(file))
        .sort((first, second) => first.localeCompare(second, undefined, { numeric: true }))
        .map((file) => `/PerjalananAjisaka/${encodeURIComponent(file)}`)

    const perjalanan: PerjalananAjisaka[] = [
        {
            id: 1,
            title: "“Mentas Sasarengan: Mendobrak Batas”",
            years: "2018",
            description: "Melalui mata lomba Ajisaka 2018, Insan Kreatif diajak untuk bersama-sama mendobrak batas berupa masalah kemajemukan dan intoleransi yang terjadi di Indonesia."
        },
        {
            id: 2,
            years: "2019",
            title: "“Abhipraya Darani: Meluak Plastik”",
            description: "Melalui setiap mata lomba pada Ajisaka 2019, Insan Kreatif diajak untuk bersama-sama menumbuhkan semangat untuk membuat bumi menjadi tempat yang lebih baik."
        },
        {
            id: 3,
            years: "2020",
            title: "“Biwara Bumandhala: Berita Baik Untuk Bumi”",
            description: "Melalui bidang-bidang mata lomba yang Ajisaka tawarkan, Insan Kreatif ditantang untuk menjadi bagian dari agen perubahan yang bertujuan untuk menanamkan kesadaran serta mengedukasi masyarakat bahwa komunikasi memiliki peran krusial dalam pemulihan situasi pasca krisis."
        },
        {
            id: 4,
            years: "2023",
            title: "“Agnia Abhipraya: Pembawa Cahaya Pengharapan”",
            description: "Melalui mata lomba yang diadakan, Insan Kreatif diajak untuk mengedukasi masyarakat mengenai pentingnya komunikasi sebagai sarana perwujudan kesetaraan gender. Selain itu, Insan Kreatif diajak untuk turut serta berkontribusi dalam pencegahan serta penanggulangan tindak Kekerasan Berbasis Gender Online (KBGO)"
        }, 
        {
            id: 5,
            years: "2024",
            title: "“Samarthya Bhumi: Setiap Hidup Berharga, Setiap Aksi Bermakna”",
            description: "Pengangkatan tema ini ditujukan untuk mengajak Insan Kreatif peduli terhadap isu lingkungan yang mengancam keseimbangan kehidupan, termasuk manusia, satwa liar, dan keberlanjutan."
        },
        {
            id: 6,
            years: "2025",
            title: "“Gaman Kamulyan: Gaungkan Harapan Keberlanjutan”",
            description: "Mengajak Insan Kreatif untuk peka terhadap isu krisis global, salah satunya adalah kerusakan lingkungan akibat praktik pembangunan ekonomi yang tidak berkelanjutan."
        }
    ]

    return (
        <PerjalananAjisakaClient images={images} perjalanan={perjalanan} />
    )
}

export default PerjalananAjisaka
